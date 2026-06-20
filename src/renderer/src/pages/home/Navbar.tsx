import { Navbar, NavbarCenter, NavbarLeft, NavbarRight } from '@renderer/components/app/Navbar'
import SearchPopup from '@renderer/components/Popups/SearchPopup'
import { useShortcut } from '@renderer/hooks/useShortcuts'
import { useShowAssistants } from '@renderer/hooks/useStore'
import { Tooltip } from 'antd'
import { t } from 'i18next'
import { Info, Menu, PanelLeftClose, PanelRightClose, Search } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Modal } from 'antd'

import NavbarIcon from '../../components/NavbarIcon'
import AssistantsDrawer from './components/AssistantsDrawer'

const AboutButton = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip title={'关于'} mouseEnterDelay={0.8}>
        <NavbarIcon onClick={() => setOpen(true)}>
          <Info size={18} />
        </NavbarIcon>
      </Tooltip>
      <Modal title={'关于 小豆智能体'} open={open} onCancel={() => setOpen(false)} onOk={() => setOpen(false)} destroyOnClose footer={null} width={620}>
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
          <div>本软件按现状提供，不作任何明示或暗示担保。</div>
        </div>
      </Modal>
    </>
  )
}

interface Props {
  activeAssistant: any
  activeTopic: any
  setActiveTopic: (topic: any) => void
  setActiveAssistant: (assistant: any) => void
  position: 'left' | 'right'
}

const HeaderNavbar = (props: Props) => {
  const { activeAssistant, setActiveAssistant, activeTopic, setActiveTopic } = props as any
  const { showAssistants, toggleShowAssistants } = useShowAssistants()

  useShortcut('search_message', () => {
    void SearchPopup.show()
  })

  const onShowAssistantsDrawer = () => {
    void AssistantsDrawer.show({
      activeAssistant,
      setActiveAssistant,
      activeTopic,
      setActiveTopic
    })
  }

  return (
    <Navbar className="home-navbar">
      <AnimatePresence initial={false}>
        {showAssistants && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden', display: 'flex', flexDirection: 'row' }}>
            <NavbarLeft style={{ justifyContent: 'space-between', borderRight: 'none', padding: 0 }}>
              <Tooltip title={t('navbar.hide_sidebar')} mouseEnterDelay={0.8}>
                <NavbarIcon onClick={toggleShowAssistants}>
                  <PanelLeftClose size={18} />
                </NavbarIcon>
              </Tooltip>
            </NavbarLeft>
          </motion.div>
        )}
      </AnimatePresence>
      {!showAssistants && (
        <NavbarLeft
          style={{
            justifyContent: 'flex-start',
            borderRight: 'none',
            paddingLeft: 0,
            paddingRight: 0,
            minWidth: 'auto'
          }}>
          <Tooltip title={t('navbar.show_sidebar')} mouseEnterDelay={0.8} placement="right">
            <NavbarIcon onClick={() => toggleShowAssistants()}>
              <PanelRightClose size={18} />
            </NavbarIcon>
          </Tooltip>
          <AnimatePresence initial={false}>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}>
              <NavbarIcon onClick={onShowAssistantsDrawer} style={{ marginLeft: 8 }}>
                <Menu size={18} />
              </NavbarIcon>
            </motion.div>
          </AnimatePresence>
        </NavbarLeft>
      )}
      <NavbarCenter></NavbarCenter>
      <NavbarRight
        style={{
          justifyContent: 'flex-end',
          flex: 1,
          position: 'relative',
          paddingRight: '15px'
        }}
        className="home-navbar-right">
        <AboutButton />
        <Tooltip title={t('chat.assistant.search.placeholder')} mouseEnterDelay={0.8}>
          <NavbarIcon onClick={() => SearchPopup.show()}>
            <Search size={18} />
          </NavbarIcon>
        </Tooltip>
      </NavbarRight>
    </Navbar>
  )
}

export default HeaderNavbar
