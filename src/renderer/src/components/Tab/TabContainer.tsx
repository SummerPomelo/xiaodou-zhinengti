import { loggerService } from '@logger'
import HorizontalScrollContainer from '@renderer/components/HorizontalScrollContainer'
import { isLinux, isMac } from '@renderer/config/constant'
import { allMinApps } from '@renderer/config/minapps'
import { useTheme } from '@renderer/context/ThemeProvider'
import { useFullscreen } from '@renderer/hooks/useFullscreen'
import { useMinappPopup } from '@renderer/hooks/useMinappPopup'
import { useMinapps } from '@renderer/hooks/useMinapps'
import { useSettings } from '@renderer/hooks/useSettings'
import { getThemeModeLabel, getTitleLabel } from '@renderer/i18n/label'
import { useAppDispatch, useAppSelector } from '@renderer/store'
import type { Tab } from '@renderer/store/tabs'
import { addTab, removeTab, setActiveTab } from '@renderer/store/tabs'
import { ThemeMode } from '@renderer/types'
import type { MinAppType } from '@renderer/types'
import type { LRUCache } from 'lru-cache'
import { Tooltip } from 'antd'
import {
  Home,
  LayoutGrid,
  Monitor,
  Moon,
  MousePointerClick,
  Settings,
  Sparkle,
  Sun,
  X
} from 'lucide-react'
import { useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import MinAppIcon from '../Icons/MinAppIcon'
import WindowControls from '../WindowControls'

interface TabsContainerProps {
  children: React.ReactNode
}

const logger = loggerService.withContext('TabContainer')

const getTabIcon = (
  tabId: string,
  minapps: MinAppType[],
  minAppsCache?: LRUCache<string, MinAppType>
): React.ReactNode | undefined => {
  if (tabId.startsWith('apps:')) {
    const appId = tabId.replace('apps:', '')
    let app = [...allMinApps, ...minapps].find((app) => app.id === appId)

    if (!app && minAppsCache) {
      app = minAppsCache.get(appId)

      if (!app) {
        logger.warn(`MinApp ${appId} not found in cache, using fallback icon`)
      }
    }

    if (app) {
      return <MinAppIcon size={14} app={app} />
    }

    return <LayoutGrid size={14} />
  }

  switch (tabId) {
    case 'home':
      return <Home size={14} />
    case 'agents':
      return <MousePointerClick size={14} />
    case 'store':
      return <Sparkle size={14} />
    case 'settings':
      return <Settings size={14} />
    default:
      return null
  }
}

let lastSettingsPath = '/settings/provider'
const specialTabs = ['settings']

const TabsContainer: React.FC<TabsContainerProps> = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const tabs = useAppSelector((state) => state.tabs.tabs)
  const activeTabId = useAppSelector((state) => state.tabs.activeTabId)
  const isFullscreen = useFullscreen()
  const { hideMinappPopup, minAppsCache } = useMinappPopup()
  const { minapps } = useMinapps()
  const { useSystemTitleBar } = useSettings()
  const { t } = useTranslation()
  const { settedTheme, toggleTheme } = useTheme()

  const getTabId = (path: string): string => {
    if (path === '/') return 'home'
    const segments = path.split('/')
    if (segments[1] === 'apps' && segments[2]) {
      return `apps:${segments[2]}`
    }
    return segments[1]
  }

  const getTabTitle = (tabId: string): string => {
    if (tabId.startsWith('apps:')) {
      const appId = tabId.replace('apps:', '')
      let app = [...allMinApps, ...minapps].find((app) => app.id === appId)

      if (!app && minAppsCache) {
        app = minAppsCache.get(appId)

        if (!app) {
          logger.warn(`MinApp ${appId} not found in cache, using fallback title`)
        }
      }

      return app ? app.name : `MinApp-${appId}`
    }
    return getTitleLabel(tabId)
  }

  const shouldCreateTab = (path: string) => {
    if (path === '/') return false
    if (path.startsWith('/settings')) return false
    const segments = path.split('/')
    return segments.length > 1 && segments[1] !== ''
  }

  const removeSpecialTabs = useCallback(() => {
    const currentTabs = tabs
    const specialTabsToRemove = currentTabs.filter((tab) => specialTabs.includes(tab.id))
    specialTabsToRemove.forEach((tab) => {
      if (tab.id !== activeTabId) {
        dispatch(removeTab(tab.id))
      }
    })
  }, [activeTabId, dispatch, tabs])

  useEffect(() => {
    const tabId = getTabId(location.pathname)
    const currentTab = tabs.find((tab) => tab.id === tabId)

    if (!currentTab && shouldCreateTab(location.pathname)) {
      dispatch(addTab({ id: tabId, path: location.pathname }))
    } else if (currentTab) {
      dispatch(setActiveTab(currentTab.id))
    }

    if (location.pathname.startsWith('/settings/')) {
      lastSettingsPath = location.pathname
      if (activeTabId !== 'settings') {
        dispatch(setActiveTab('settings'))
      }
    }
  }, [dispatch, location.pathname, tabs])

  useEffect(() => {
    removeSpecialTabs()
  }, [removeSpecialTabs])

  const closeTab = (tabId: string) => {
    void tabId
  }

  const handleSettingsClick = () => {
    hideMinappPopup()
    navigate(lastSettingsPath)
  }

  const handleTabClick = (tab: Tab) => {
    hideMinappPopup()
    navigate(tab.path)
  }

  const visibleTabs = useMemo(() => tabs.filter((tab) => !specialTabs.includes(tab.id)), [tabs])

  return (
    <Container>
      <TabsBar $isFullscreen={isFullscreen}>
        <HorizontalScrollContainer dependencies={[tabs]} gap="6px" className="tab-scroll-container">
          {visibleTabs.map((tab) => {
            const isClosable = tab.id !== 'home' && tab.id !== 'store'
            return (
              <Tab
                key={tab.id}
                active={tab.id === activeTabId}
                onClick={() => handleTabClick(tab)}
                onAuxClick={(e) => {
                  if (e.button === 1 && isClosable) {
                    e.preventDefault()
                    e.stopPropagation()
                    closeTab(tab.id)
                  }
                }}>
                <TabHeader>
                  {tab.id && <TabIcon>{getTabIcon(tab.id, minapps, minAppsCache)}</TabIcon>}
                  <TabTitle>{getTabTitle(tab.id)}</TabTitle>
                </TabHeader>
                {isClosable && (
                  <CloseButton
                    className="close-button"
                    onClick={(e) => {
                      e.stopPropagation()
                      closeTab(tab.id)
                    }}>
                    <X size={12} />
                  </CloseButton>
                )}
              </Tab>
            )
          })}
        </HorizontalScrollContainer>
        <RightButtonsContainer style={{ paddingRight: isLinux && useSystemTitleBar ? '12px' : undefined }}>
          <Tooltip title={t('settings.theme.title') + ': ' + getThemeModeLabel(settedTheme)} mouseEnterDelay={0.8}>
            <ThemeButton onClick={toggleTheme}>
              {settedTheme === ThemeMode.dark ? (
                <Moon size={16} />
              ) : settedTheme === ThemeMode.light ? (
                <Sun size={16} />
              ) : (
                <Monitor size={16} />
              )}
            </ThemeButton>
          </Tooltip>
          <SettingsButton onClick={handleSettingsClick} $active={activeTabId === 'settings'}>
            <Settings size={16} />
          </SettingsButton>
        </RightButtonsContainer>
        <WindowControls />
      </TabsBar>
      <TabContent>
        {children}
      </TabContent>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const TabsBar = styled.div<{ $isFullscreen: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding-left: ${({ $isFullscreen }) => (!$isFullscreen && isMac ? 'calc(env(titlebar-area-x) + 4px)' : '15px')};
  padding-right: ${({ $isFullscreen }) => ($isFullscreen ? '12px' : '0')};
  height: var(--navbar-height);
  min-height: ${({ $isFullscreen }) => (!$isFullscreen && isMac ? 'env(titlebar-area-height)' : '')};
  position: relative;
  -webkit-app-region: drag;

  > * {
    position: relative;
    z-index: 1;
    -webkit-app-region: no-drag;
  }

  .tab-scroll-container {
    -webkit-app-region: drag;

    > * {
      -webkit-app-region: no-drag;
    }
  }
`

const Tab = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 10px;
  padding-right: 8px;
  background: ${(props) => (props.active ? 'var(--color-list-item)' : 'transparent')};
  transition: background 0.2s;
  border-radius: var(--list-item-border-radius);
  user-select: none;
  height: 30px;
  min-width: 90px;

  .close-button {
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover {
    background: var(--color-list-item);
    .close-button {
      opacity: 1;
    }
  }
`

const TabHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  flex: 1;
`

const TabIcon = styled.span`
  display: flex;
  align-items: center;
  color: var(--color-text-2);
  flex-shrink: 0;
`

const TabTitle = styled.span`
  color: var(--color-text);
  font-size: 13px;
  display: flex;
  align-items: center;
  margin-right: 4px;
  overflow: hidden;
  white-space: nowrap;
`

const CloseButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
`

const RightButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;
  padding-right: ${isMac ? '12px' : '0'};
  flex-shrink: 0;
`

const ThemeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: var(--color-text);
  border-radius: 8px;
  &:hover {
    background: var(--color-list-item);
  }
`

const SettingsButton = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: var(--color-text);
  border-radius: 8px;
  background: ${(props) => (props.$active ? 'var(--color-list-item)' : 'transparent')};
  &:hover {
    background: var(--color-list-item);
  }
`

const TabContent = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: calc(100vw - 12px);
  margin: 6px;
  margin-top: 0;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`

export default TabsContainer

