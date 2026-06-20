import type { Assistant } from '@renderer/types'
import { Drawer, Modal, Tooltip } from 'antd'
import { t } from 'i18next'
import { Info, Settings2 } from 'lucide-react'
import type { FC } from 'react'
import { useState } from 'react'

import NavbarIcon from '../../../../../components/NavbarIcon'
import { AssistantSettingsTab } from './SettingsTab'

interface Props {
  assistant?: Assistant
}

const AboutButton: FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Tooltip title={'关于'} mouseEnterDelay={0.8}>
        <NavbarIcon onClick={() => setOpen(true)}>
          <Info size={18} />
        </NavbarIcon>
      </Tooltip>
      <Modal
        title={'关于 小豆智能体'}
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
        destroyOnClose
        footer={null}
        width={620}
      >
        <div style={{ lineHeight: 1.8 }}>
          <div><b>产品：</b>小豆智能体</div>
          <div><b>版本：</b>v1.1.9</div>
          <div><b>定位：</b>基于 Cherry Studio Community Edition 的二次开发定制版（面向 AI 漫剧/短剧生产场景）</div>
          <div><b>许可证：</b>GNU AGPL-3.0</div>
          <div><b>源码仓库：</b>https://github.com/SummerPomelo/xiaodou-zhinengti</div>

          <div style={{ marginTop: 12, fontWeight: 600 }}>二次开发声明</div>
          <div>本软件基于 Cherry Studio v1.9.9 进行二次开发与定制，遵循相同 AGPL-3.0 许可证条款。</div>

          <div style={{ marginTop: 12, fontWeight: 600 }}>上游归属</div>
          <div>上游项目：Cherry Studio ｜ 上游版本：v1.9.9</div>
          <div>上游仓库：https://github.com/CherryHQ/cherry-studio</div>
          <div>上游许可证：AGPL-3.0 ｜ 上游版权：Copyright (c) CherryHQ</div>

          <div style={{ marginTop: 12, fontWeight: 600 }}>免责</div>
          <div>本软件按“现状”提供，不作任何明示或暗示担保。</div>
        </div>
      </Modal>
    </>
  )
}

const SettingsButton: FC<Props> = ({ assistant }) => {
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    <>
      <AboutButton />
      <Tooltip title={t('settings.title')} mouseEnterDelay={0.8}>
        <NavbarIcon onClick={() => setSettingsOpen(true)}>
          <Settings2 size={18} />
        </NavbarIcon>
      </Tooltip>
      <Drawer
        placement="right"
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        width="var(--assistants-width)"
        closable={false}
        styles={{ body: { padding: 0, paddingTop: 'var(--navbar-height)' } }}
      >
        {assistant && <AssistantSettingsTab assistant={assistant} />}
      </Drawer>
    </>
  )
}

export default SettingsButton
