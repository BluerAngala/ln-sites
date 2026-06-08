# 飞书多维表格 · CMS 建表指南

> 这份文档给**运营、律师助理、行政**看。
> 看不懂代码没关系，按步骤在飞书里点几下，就能让网站内容自动同步。

---

## 0. 为什么用飞书

我们用**飞书多维表格（Base）**当 CMS。原因是：

- ✅ **律所和律师都在用飞书**，门槛为零
- ✅ 多人实时协作，自带权限 / 历史版本 / 移动端
- ✅ 类 Excel 的表格视图，所见即所得
- ✅ 完全免费，无服务器成本
- ✅ 内容改动后**自动触发网站重新部署**（配 webhook 后）

---

## 1. 全流程概览

```
┌─────────────────┐
│  你/律师/助理    │
│  在飞书表格里    │
│  改一行案例      │
└────────┬────────┘
         │ 飞书多维表格「记录变更事件」
         ▼
┌─────────────────┐
│   飞书 Webhook   │  ← 在飞书开发者后台配置
│   → 调部署服务   │
└────────┬────────┘
         │ POST
         ▼
┌─────────────────┐
│  Vercel / Netlify│  ← 自动跑 npm run build
│  重新构建网站    │  ← 拉取最新飞书数据 → 生成静态页
└────────┬────────┘
         │
         ▼
   全新网站上线
```

> 这一节是「全自动」的最终目标。  
> 第一次接入只做第 2-5 步即可，先用「手动触发」让网站跑起来。

---

## 2. 一次性配置：飞书自建应用（10 分钟）

> 如果这一步已经有人做过，**直接跳到第 3 节**。

### 2.1 创建应用

1. 打开 [飞书开放平台](https://open.feishu.cn/app)
2. 点击「**创建企业自建应用**」
3. 填写：
   - 应用名称：`岭南所官网 CMS`
   - 应用描述：`驱动 lingnanlaw.com 内容同步`
4. 创建后进入应用详情页，记下：
   - **App ID**（形如 `cli_xxxxxxxx`）
   - **App Secret**（点击「查看」获取）

### 2.2 配置权限

进入「**权限管理**」，开通以下权限：

| 权限 | 用途 |
|------|------|
| `bitable:app:readonly` | 读取多维表格（必须） |
| `bitable:app` | 读取多维表格（新版，推荐） |

### 2.3 把应用加入多维表格

1. 创建/打开**「岭南所官网内容库」**多维表格
2. 右上角「**分享**」→ 搜索 `岭南所官网 CMS` → 设为「**可编辑**」
3. 进入「**设置 → 高级权限 → 启用高级权限**」
4. 在「**成员与角色**」中给应用授予「**管理员**」或「**编辑者**」权限

### 2.4 拿到 Base Token

多维表格 URL 长这样：
```
https://xxx.feishu.cn/base/AbCdEfGhIjKlMnOpQrStUvWx?table=tbl123456
                              ^^^^^^^^^^^^^^^^                ^^^^^^^^^
                              Base Token                      Table ID
```

把 `Base Token`（`AbCdEfGh...`）记下来。

---

## 3. 创建 8 张表

> 在「**岭南所官网内容库**」里，依次创建下面 8 张表。

### 3.1 表：lawyers · 律师

字段（**字段名严格按英文**建，飞书显示名可中文）：

| 字段名（英文） | 类型 | 飞书显示名 | 必填 | 说明 |
|---|---|---|---|---|
| `slug` | 单行文本 | URL 标识 | ✅ | 拼音，如 `wang-bo` |
| `name` | 单行文本 | 姓名 | ✅ | 中文 |
| `nameEn` | 单行文本 | 英文名 | | 全大写拼音 `WANG Bo` |
| `level` | 单选 | 职级 | ✅ | 选项：高级合伙人 / 合伙人 / 资深律师 / 律师 / 顾问 |
| `licenseNo` | 单行文本 | 执业证号 | | |
| `phone` | 电话 | 电话 | | |
| `email` | 邮箱 | 邮箱 | | |
| `office` | 单选 | 所在办公室 | | 选项：广州 / 深圳 / 海口 / 东莞 / 惠州 / 佛山 / 花都 |
| `avatar` | 附件 | 头像 | | 一张图片 |
| `bio` | 多行文本 | 简介 | ✅ | 1-2 句话，用于卡片 |
| `bioLong` | 多行文本 | 详细介绍 | | 详情页正文 |
| `practiceAreas` | 多选 | 专业领域 | | 选项：刑事辩护 / 公司商事 / 争议解决 / 知识产权 / 资本市场 / 跨境投资 / 房地产 / 金融资管 |
| `expertise` | 多选 | 擅长案件 | | 自定义选项 |
| `education` | 多选 | 教育背景 | | 自定义选项 |
| `languages` | 多选 | 工作语言 | | 选项：中文 / 英文 / 粤语 |
| `status` | 单选 | 状态 | ✅ | 选项：在职 / 已离职 |
| `order` | 数字 | 排序 | | 小的排前 |

> 拿到表 ID（URL 里的 `tbl...`）填到 `.env` 的 `LARK_TABLE_LAWYERS`。

### 3.2 表：cases · 案例

| 字段名 | 类型 | 飞书显示名 | 必填 | 说明 |
|---|---|---|---|---|
| `slug` | 单行文本 | URL 标识 | ✅ | 拼音 |
| `title` | 单行文本 | 标题 | ✅ | |
| `type` | 单选 | 类型 | ✅ | 诉讼仲裁 / 公司商事 / 知识产权 / 刑事辩护 / 跨境投资 / 资本市场 / 合规 / 其他 |
| `industry` | 单选 | 行业 | ✅ | 金融 / 房地产 / 互联网 / 制造业 / 能源 / 医药 / 贸易 / 政府 / 其他 |
| `client` | 单行文本 | 客户 | | 可脱敏为"某上市公司" |
| `year` | 数字 | 年份 | ✅ | 4 位数字 |
| `summary` | 多行文本 | 摘要 | ✅ | 1-2 句，用于卡片 |
| `content` | 多行文本 | 详情 | ✅ | 详情页正文（可换行/列表） |
| `highlights` | 多选 | 亮点 | | 短标签，如 "标的 12 亿元" |
| `leadLawyer` | 关联 lawyers | 主理律师 | | 关联记录 |
| `lawyers` | 关联 lawyers | 协办律师 | | 关联记录（多选） |
| `practiceArea` | 单选 | 业务领域 | | 同步 lawyers.practiceAreas 选项 |
| `isFeatured` | 复选框 | 是否精选 | | 勾选后在首页"业绩"模块展示 |
| `status` | 单选 | 状态 | ✅ | published / draft（draft 不显示） |

> ⚠️ 关联字段（`leadLawyer` / `lawyers`）需要在飞书多维表格里手动加；类型选「关联记录 → 律师表」。

### 3.3 表：news · 资讯

| 字段名 | 类型 | 飞书显示名 | 必填 | 说明 |
|---|---|---|---|---|
| `slug` | 单行文本 | URL 标识 | ✅ | |
| `title` | 单行文本 | 标题 | ✅ | |
| `category` | 单选 | 分类 | ✅ | 所内动态 / 行业观察 / 媒体报道 / 活动 / 专业文章 / 公告 |
| `date` | 日期 | 发布日期 | ✅ | |
| `summary` | 多行文本 | 摘要 | ✅ | |
| `content` | 多行文本 | 正文 | ✅ | |
| `cover` | 附件 | 封面图 | | |
| `author` | 单行文本 | 作者 | | |
| `isFeatured` | 复选框 | 置顶 | | 勾选后置顶在列表顶部 |
| `status` | 单选 | 状态 | ✅ | published / draft |

### 3.4 表：honors · 荣誉

| 字段名 | 类型 | 飞书显示名 | 必填 | 说明 |
|---|---|---|---|---|
| `title` | 单行文本 | 名称 | ✅ | |
| `issuer` | 单行文本 | 颁发机构 | ✅ | |
| `date` | 日期 | 获得日期 | ✅ | |
| `description` | 多行文本 | 描述 | | |
| `category` | 单选 | 分类 | ✅ | 综合排名 / 专业奖项 / 公益 / 党建 / 行业认可 / 其他 |
| `ranking` | 单行文本 | 榜单/排名 | | 如 "Band 1" |

### 3.5 表：practices · 业务领域

| 字段名 | 类型 | 飞书显示名 | 必填 | 说明 |
|---|---|---|---|---|
| `name` | 单行文本 | 中文名 | ✅ | |
| `nameEn` | 单行文本 | 英文名 | ✅ | |
| `description` | 多行文本 | 简介 | ✅ | 1-2 句 |
| `content` | 多行文本 | 详细介绍 | | 详情正文 |
| `caseCount` | 数字 | 案例数量 | | 选填 |
| `icon` | 单行文本 | 图标 | | emoji 或字符，可选 |
| `order` | 数字 | 排序 | | 小的排前 |

### 3.6 表：offices · 办公室

| 字段名 | 类型 | 飞书显示名 | 必填 | 说明 |
|---|---|---|---|---|
| `city` | 单行文本 | 城市 | ✅ | |
| `cityEn` | 单行文本 | 英文城市 | ✅ | |
| `address` | 多行文本 | 地址 | ✅ | |
| `phone` | 电话 | 电话 | ✅ | |
| `fax` | 电话 | 传真 | | |
| `email` | 邮箱 | 邮箱 | | |
| `description` | 多行文本 | 简介 | | |
| `isHeadquarters` | 复选框 | 是否总所 | | 只勾一个 |
| `order` | 数字 | 排序 | | |

### 3.7 表：social · 公益

| 字段名 | 类型 | 飞书显示名 | 必填 | 说明 |
|---|---|---|---|---|
| `title` | 单行文本 | 标题 | ✅ | |
| `date` | 日期 | 日期 | ✅ | |
| `location` | 单行文本 | 地点 | | |
| `lawyers` | 关联 lawyers | 参与律师 | | 多选 |
| `category` | 单选 | 分类 | ✅ | 法律援助 / 公益捐赠 / 普法宣传 / 社区服务 / 助学 / 抗疫 / 其他 |
| `description` | 多行文本 | 描述 | ✅ | |
| `content` | 多行文本 | 详情 | | |

### 3.8 表：site_config · 网站配置

> 这张表用「**键值对**」结构存首页副标题、Hero 文案、4 个大数字等。

| 字段名 | 类型 | 飞书显示名 | 必填 | 说明 |
|---|---|---|---|---|
| `key` | 单行文本 | 键 | ✅ | 见下表 |
| `value` | 多行文本 | 值 | ✅ | |

**预置 26 个 key**（一行一个）：

| key | 说明 | 示例 |
|---|---|---|
| `heroKicker1` | 顶部小标 1 | 庚子年立 · 一九八四 |
| `heroKicker2` | 顶部小标 2 | Chambers Band 1 · ALB 华南 |
| `heroTitle1` | Hero 标题第一行 | 行商法之 |
| `heroTitle2` | Hero 标题第二行 | 轻重缓急。 |
| `heroLede` | Hero 段落 | 多行用 \n 换行 |
| `stat1Num` / `stat1Suffix` / `stat1Label` | 第 1 个数字 | `40` / `年` / `执业沉淀\n自 1984` |
| `stat2Num` / `stat2Suffix` / `stat2Label` | 第 2 个数字 | `90` / `+` / `执业律师\n含 30 位合伙人` |
| `stat3Num` / `stat3Suffix` / `stat3Label` | 第 3 个数字 | `7` / `` / `城市办公室\n广州 · 深圳 · ...` |
| `stat4Num` / `stat4Suffix` / `stat4Label` | 第 4 个数字 | `8` / `大` / `业务领域\n覆盖商事全谱系` |
| `aboutQuote` | 关于页引言 | 一所之重，不在楼宇... |
| `aboutQuoteAttr` | 引言出处 | — 创始合伙人 / 1984 |
| `aboutBody` | 关于页正文 | 支持 HTML 标签（`<p>` `<strong>`） |
| `tagline1` / `taglineAttr1` | 标语 1 | 为律师谋发展 / — 岭南所训 |
| `tagline2` / `taglineAttr2` | 标语 2 | 慎思笃行，义利相济 / — 岭南所风 |
| `contactPhone` | 联系电话 | +86-20-3839-0333 |
| `contactEmail` | 联系邮箱 | hello@lingnanlaw.com |
| `contactAddress` | 联系地址 | 广州市天河区... |
| `icpNo` | ICP 备案号 | 粤ICP备... |
| `copyright` | 版权信息 | © 2025 广东岭南律师事务所 |

---

## 4. 填 `.env` 并跑通

```bash
cd web
cp .env.example .env
# 编辑 .env，填入 LARK_APP_ID / LARK_APP_SECRET / LARK_BASE_TOKEN / 8 个 LARK_TABLE_*
```

跑一遍连通性测试：

```bash
npm install
npm run lark:test
```

应该看到 8 张表都返回 `✅ 共 N 条记录`。

最后跑构建：

```bash
npm run build
```

构建产物在 `dist/`，可直接部署到任何静态托管。

---

## 5. 日常更新流程

> 这一节给运营/律师助理看。

### 5.1 加一条新案例

1. 打开飞书「岭南所官网内容库」
2. 切到「**cases**」表
3. 点「**+ 新增**」→ 填字段 → 保存
4. 在「**status**」选 `published` 才会上线
5. 默认不会自动部署，需要**手动触发**（见下）

### 5.2 加一位新律师

1. 切到「**lawyers**」表 → 新增
2. 填 `slug`（拼音）+ 各项资料
3. 关联字段如果已建律师表，则可关联到现有律师

### 5.3 改首页数字 / 标语

1. 切到「**site_config**」表
2. 找到对应 `key`（如 `stat1Num`）的那一行
3. 改 `value` 列
4. 保存

### 5.4 让网站生效

- **手动触发**：找开发者跑 `npm run build` 后重新部署
- **自动触发**（推荐）：配飞书 Webhook → 部署平台（Vercel / Netlify / Cloudflare），见下节

---

## 6. 进阶：自动重新部署（可选）

### 6.1 飞书 Webhook

1. 进入应用「**事件订阅**」
2. 添加事件：**多维表格 - 记录变更**
3. 填入「**请求网址**」：`https://api.vercel.com/v1/integrations/deploy/...`（Vercel 部署钩子）
   - 或 Netlify 的 build hook
   - 或自建服务（参见 `scripts/lark-test.mjs` 风格）

> 详细配置参考：[飞书 Webhook 文档](https://open.feishu.cn/document/server-docs/event-subscription-guide/overview)

### 6.2 部署平台 Build Hook

- **Vercel**：Settings → Git → Deploy Hooks
- **Netlify**：Site settings → Build & deploy → Build hooks
- **Cloudflare Pages**：Settings → Builds → Deploy hooks

把生成的 URL 填到飞书 Webhook 即可。

---

## 7. 常见问题

### Q1：字段名写错了怎么办？
A：飞书多维表格支持修改字段名，**两边要保持一致**。改完字段名后跑 `npm run lark:test` 验证。

### Q2：富文本 / 图片怎么传？
A：当前版本**只支持文本**。图片请上传到附件字段（`avatar` / `cover`）。后续会支持富文本。

### Q3：能不能多人同时编辑？
A：可以。飞书多维表格支持多人实时协作，权限可在「高级权限」里细粒度控制。

### Q4：不想用飞书，能换成别的吗？
A：可以。`src/lib/content.ts` 是数据层入口，换成 Notion API / Strapi / 本地 Markdown 都行，UI 不动。

### Q5：万一飞书挂了，网站还能用吗？
A：能。`src/lib/content.ts` 在飞书拉取失败时会**自动降级到本地 mock 数据**，保证 build 不会失败。已 build 的静态页继续可用。

### Q6：能不能不用飞书，直接用本地 Markdown？
A：可以。`CONTENT_SOURCE=mock` 即用本地 mock。  
   后续会加 `CONTENT_SOURCE=md` 支持 Markdown 文件模式，律师可以在 Obsidian / VS Code 写。
