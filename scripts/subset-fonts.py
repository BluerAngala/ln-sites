#!/usr/bin/env python3
"""
中文字体子集化脚本
1. 扫描 web/src 下所有文件，提取用到的中文字符
2. 下载 Noto Serif SC（200/400 weight）和 Noto Sans SC（400/500 weight）
3. 子集化到只保留用到的字符 + 基本拉丁字符 + 标点
4. 重新打包为 woff2，输出到 web/public/fonts/
"""
import re
import os
import sys
import json
import urllib.request
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.subset import Subsetter, Options

WEB_DIR = Path('/Users/bluer/Documents/trae_projects/岭南所官网/web')
FONTS_OUT = WEB_DIR / 'public' / 'fonts'
FONTS_OUT.mkdir(parents=True, exist_ok=True)

# 1. 扫描提取字符
def collect_chars():
    chars = set()
    # 扫所有 .astro / .ts / .md / .json 文件
    for pattern in ['**/*.astro', '**/*.ts', '**/*.md', '**/*.json', '**/*.mjs']:
        for f in WEB_DIR.glob(pattern):
            if 'node_modules' in str(f) or '.astro' in str(f) or 'dist' in str(f):
                continue
            try:
                text = f.read_text(encoding='utf-8')
                # 提取中文字符（CJK Unified Ideographs + 标点 + 全角）
                for m in re.finditer(r'[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]', text):
                    chars.add(m.group(0))
            except Exception as e:
                print(f'  skip {f}: {e}')
    return chars

# 2. 下载 Noto Serif SC 的特定字重（从 jsdelivr CDN，比 Google Fonts 稳）
NOTO_SERIF_URL = 'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/Variable/TTF/Subset/NotoSansSC-VF.ttf'
NOTO_SANS_URL = 'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/Variable/TTF/Subset/NotoSansSC-VF.ttf'

# 用 Google Fonts 的 woff2，更小（已经过 woff2 压缩）
# 但下载慢，改用 jsdelivr

def download_font(url, dst):
    if dst.exists():
        print(f'  ✓ {dst.name} 已存在 ({dst.stat().st_size/1024:.0f} KB)')
        return dst
    print(f'  ↓ 下载 {url}')
    urllib.request.urlretrieve(url, dst)
    print(f'  ✓ {dst.name} ({dst.stat().st_size/1024:.0f} KB)')
    return dst

def subset_font(src_path: Path, dst_path: Path, chars: set, label: str):
    print(f'\n▶ 子集化 {label}：{src_path.name} → {dst_path.name}')
    font = TTFont(str(src_path))

    # 字符集 = 用到的字 + ASCII 拉丁 + 数字 + 常用标点
    basic_chars = set('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
    common_punct = set(' .,;:!?·•…-—()（）【】《》「」""\'\'/@#$%^&*+=<>[]{}|\\~`')
    final_chars = chars | basic_chars | common_punct

    print(f'  原字符集：{len(set(font.getBestCmap())):,}')
    print(f'  目标字符集：{len(final_chars):,}')
    print(f'  保留率：{len(final_chars)/len(set(font.getBestCmap()))*100:.1f}%')

    options = Options()
    options.flavor = 'woff2'
    options.layout_features = ['*']  # 保留所有 OpenType 特性
    options.name_IDs = ['*']
    options.name_legacy = True
    options.name_languages = ['*']
    options.notdef_outline = True
    options.recalc_bounds = True
    options.recalc_timestamp = False
    options.canonical_order = True
    options.with_zopfli = False

    subsetter = Subsetter(options=options)
    subsetter.populate(text=list(final_chars))
    subsetter.subset(font)
    font.save(str(dst_path))

    orig_size = src_path.stat().st_size
    new_size = dst_path.stat().st_size
    print(f'  ✓ {orig_size/1024:.0f} KB → {new_size/1024:.0f} KB  (↓ {(1-new_size/orig_size)*100:.0f}%)')
    return dst_path

def main():
    print('═══ 中文字体子集化 ═══\n')

    # 1. 收集字符
    print('▶ 扫描页面字符...')
    chars = collect_chars()
    print(f'  共 {len(chars)} 个不重复汉字')
    print(f'  示例: {"".join(sorted(chars)[:30])}...')

    # 2. 下载源字体（Noto Serif SC 完整 TTF ~16MB）
    src_dir = WEB_DIR / '.cache' / 'fonts'
    src_dir.mkdir(parents=True, exist_ok=True)
    serif_src = download_font(NOTO_SERIF_URL, src_dir / 'NotoSerifSC.ttf')
    sans_src = download_font(NOTO_SANS_URL, src_dir / 'NotoSansSC.ttf')

    # 3. 子集化
    serif_out = FONTS_OUT / 'noto-serif-sc.woff2'
    sans_out = FONTS_OUT / 'noto-sans-sc.woff2'
    subset_font(serif_src, serif_out, chars, 'Noto Serif SC (衬线/标题)')
    subset_font(sans_src, sans_out, chars, 'Noto Sans SC (无衬线/正文)')

    print('\n═══ 完成 ═══')
    print(f'输出目录: {FONTS_OUT}')
    print(f'总大小:   {(serif_out.stat().st_size + sans_out.stat().st_size)/1024:.0f} KB')
    print('\n下一步：')
    print('  1. 在 global.css 用 @font-face 引入这两个文件')
    print('  2. 改 BaseLayout 去掉 Google Fonts 的中文部分')

if __name__ == '__main__':
    main()
