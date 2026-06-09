#!/usr/bin/env python3
"""
i18n 缺译检测
- 扫描 src/lib/data/*.ts 中所有 { zh, en } / { zh, en? } 形式
- 报告缺 en 翻译的字段
- 退出码:0=无缺译，1=有缺译
"""
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "src" / "lib" / "data"

# 匹配一个对象字面量，含 id + 至少一个 zh: 但无 en:
# 用行号定位 + 简单括号配对找对象边界
OBJ_RE = re.compile(r"\{\s*id:\s*['\"]([^'\"]+)['\"]", re.MULTILINE)
ZH_RE = re.compile(r"\bzh\s*:", re.MULTILINE)
EN_RE = re.compile(r"\ben\s*:", re.MULTILINE)

# 对象边界（粗略配对，但 ts 数据文件里嵌套层数有限，足够用）
def find_obj_bounds(text: str, start: int) -> tuple[int, int]:
    """从 start 位置开始找匹配的 { ... }"""
    i = text.find("{", start)
    if i < 0:
        return -1, -1
    depth = 0
    j = i
    in_str = False
    quote = None
    while j < len(text):
        c = text[j]
        if in_str:
            if c == "\\":
                j += 2
                continue
            if c == quote:
                in_str = False
        else:
            if c in ('"', "'", "`"):
                in_str = True
                quote = c
            elif c == "{":
                depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    return i, j + 1
        j += 1
    return i, -1


def scan_file(path: Path) -> list[dict]:
    """返回 [{entity_id, field, line, missing}, ...]"""
    text = path.read_text(encoding="utf-8")
    issues = []
    for m in OBJ_RE.finditer(text):
        entity_id = m.group(1)
        s, e = find_obj_bounds(text, m.start())
        if e < 0:
            continue
        block = text[s:e]
        # 找所有形如 `fieldName: { ... }` 且内含 zh: 但无 en: 的字段
        # 模式：标识符 + ':' + '{'
        for fm in re.finditer(r"(\w+)\s*:\s*\{", block):
            field_name = fm.group(1)
            # 字段值是嵌套对象：找匹配的 '}'
            fs, fe = find_obj_bounds(block, fm.end() - 1)
            if fe < 0:
                continue
            value = block[fs:fe]
            has_zh = bool(ZH_RE.search(value))
            has_en = bool(EN_RE.search(value))
            if has_zh and not has_en:
                # 算行号
                line = text.count("\n", 0, s + fs) + 1
                issues.append(
                    {
                        "entity": entity_id,
                        "field": field_name,
                        "file": path.name,
                        "line": line,
                    }
                )
    return issues


def main() -> int:
    if not DATA_DIR.exists():
        print(f"[check-i18n] data dir not found: {DATA_DIR}")
        return 1

    all_issues: list[dict] = []
    files = sorted(DATA_DIR.glob("*.ts"))
    for f in files:
        all_issues.extend(scan_file(f))

    if not all_issues:
        print(f"[check-i18n] ✓ {len(files)} files scanned, no missing en translations")
        return 0

    # 按文件分组输出
    by_file: dict[str, list[dict]] = {}
    for it in all_issues:
        by_file.setdefault(it["file"], []).append(it)

    print(f"[check-i18n] ✗ {len(all_issues)} missing en translations in {len(by_file)} files:")
    for fname, items in by_file.items():
        print(f"\n  {fname}:")
        for it in items:
            print(f"    L{it['line']:>4}  {it['entity']}.{it['field']}")
    print(f"\n[check-i18n] 缺 {len(all_issues)} 条 en 翻译")
    return 1


if __name__ == "__main__":
    sys.exit(main())
