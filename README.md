# 小豆智能体 (小豆万象)

专为 AI 漫剧、AI 短剧生产场景量身打造的桌面端工具软件。

## 项目简介

小豆智能体是基于 [Cherry Studio](https://github.com/CherryHQ/cherry-studio) v1.9.9 开源项目进行二次开发与深度优化的桌面端应用，聚焦小说 IP 的 AI 可视化全链路工业化生产。

核心功能模块：
- AI 智能分镜制作（适配小说改编场景）
- 全链路 AI 内容生成能力
- 贴合漫剧、短剧生产流程的一站式剪辑辅助功能

## 技术栈

- Electron 41.2.1
- React + Redux Toolkit
- electron-vite (rolldown-vite 7.3.0)
- styled-components + Ant Design
- Tailwind CSS v4
- electron-builder 26.8.1

## 开发环境

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build

# 打包 (Windows)
npx electron-builder --win nsis
```

## 开源声明

本软件基于 Cherry Studio Community Edition v1.9.9 开源项目进行二次开发。

- **上游项目:** [Cherry Studio](https://github.com/CherryHQ/cherry-studio)
- **上游许可证:** [GNU AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.html)
- **上游版权:** Copyright (c) CherryHQ

根据 AGPL-3.0 许可证要求，本项目同样采用 AGPL-3.0 许可证开源。详细声明请参见 [NOTICE.md](./NOTICE.md)。

## 许可证

本软件采用 [GNU Affero General Public License v3.0 (AGPL-3.0)](https://www.gnu.org/licenses/agpl-3.0.html) 许可证。

- 您有权获取、使用、修改和分发本软件的源代码
- 衍生作品须同样采用 AGPL-3.0 许可证
- 保留原始版权声明和许可证文本
- 如需商用授权豁免，请联系上游：bd@cherry-ai.com

## 免责声明

本软件按"现状"（AS IS）提供，不附带任何明示或暗示的担保。

## 致谢

感谢 CherryHQ 团队开发并开源 Cherry Studio，为 AI 应用桌面端工具提供了优秀的技术基础。