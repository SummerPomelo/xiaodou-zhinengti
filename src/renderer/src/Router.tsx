import '@renderer/databases'

import type { FC } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import { ErrorBoundary } from './components/ErrorBoundary'
import TabsContainer from './components/Tab/TabContainer'
import NavigationHandler from './handler/NavigationHandler'
import HomePage from './pages/home/HomePage'
import SettingsPage from './pages/settings/SettingsPage'
import AssistantPresetsPage from './pages/store/assistants/presets/AssistantPresetsPage'

const Router: FC = () => {
  return (
    <HashRouter>
      <NavigationHandler />
      <TabsContainer>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/store" element={<AssistantPresetsPage />} />
            <Route path="/settings/*" element={<SettingsPage />} />
          </Routes>
        </ErrorBoundary>
      </TabsContainer>
    </HashRouter>
  )
}

export default Router
