import Scrollbar from '@renderer/components/Scrollbar'
import { useAssistantPresets } from '@renderer/hooks/useAssistantPresets'
import { createAssistantFromAgent } from '@renderer/services/AssistantService'
import type { AssistantPreset } from '@renderer/types'
import { uuid } from '@renderer/utils'
import { Button, Empty, Flex, Input } from 'antd'
import { omit } from 'lodash'
import { Import, Plus, Search, Settings2 } from 'lucide-react'
import type { FC } from 'react'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

import AddAssistantPresetPopup from './components/AddAssistantPresetPopup'
import AssistantPresetCard from './components/AssistantPresetCard'
import ImportAssistantPresetPopup from './components/ImportAssistantPresetPopup'
import ManageAssistantPresetsPopup from './components/ManageAssistantPresetsPopup'

const AssistantPresetsPage: FC = () => {
  const [search, setSearch] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)
  const { presets: userPresets } = useAssistantPresets()

  const filteredPresets = useMemo(() => {
    if (!search.trim()) {
      return userPresets
    }
    return userPresets.filter(
      (agent) =>
        agent.name.toLowerCase().includes(search.toLowerCase()) ||
        agent.description?.toLowerCase().includes(search.toLowerCase())
    )
  }, [userPresets, search])

  const { t } = useTranslation()

  const onAddPresetConfirm = useCallback(
    (preset: AssistantPreset) => {
      window.modal.confirm({
        title: preset.name,
        content: (
          <Flex gap={16} vertical style={{ width: 'calc(100% + 12px)' }}>
            {preset.description && <AgentDescription>{preset.description}</AgentDescription>}

            {preset.prompt && (
              <AgentPrompt className="markdown">
                <ReactMarkdown>{preset.prompt}</ReactMarkdown>
              </AgentPrompt>
            )}
          </Flex>
        ),
        width: 600,
        icon: null,
        closable: true,
        maskClosable: true,
        centered: true,
        okButtonProps: { type: 'primary' },
        okText: t('assistants.presets.add.button'),
        onOk: () => createAssistantFromAgent(preset)
      })
    },
    [t]
  )

  const getPresetFromUserPreset = useCallback((preset: AssistantPreset) => {
    return {
      ...omit(preset, 'group'),
      name: preset.name,
      id: uuid(),
      topics: [],
      type: 'agent'
    }
  }, [])

  const handleSearch = () => {
    if (searchInput.trim() === '') {
      setSearch('')
    } else {
      setSearch(searchInput)
    }
  }

  const handleSearchClear = () => {
    setSearch('')
    setSearchInput('')
    setIsSearchExpanded(false)
  }

  const handleSearchIconClick = () => {
    if (!isSearchExpanded) {
      setIsSearchExpanded(true)
    } else {
      handleSearch()
    }
  }

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchInput(value)
    if (value.trim() === '') {
      setIsSearchExpanded(false)
      setSearch('')
    }
  }

  const handleSearchInputBlur = () => {
    if (searchInput.trim() === '') {
      setIsSearchExpanded(false)
    }
  }

  const handleAddAgent = () => {
    void AddAssistantPresetPopup.show().then(() => {
      handleSearchClear()
    })
  }

  const handleImportAgent = async () => {
    try {
      await ImportAssistantPresetPopup.show()
    } catch (error) {
      window.toast.error(error instanceof Error ? error.message : t('message.agents.import.error'))
    }
  }

  const handleManageAgents = () => {
    ManageAssistantPresetsPopup.show()
  }

  return (
    <Container>
      <AgentsListHeader>
        <AgentsListTitle>
          {search.trim() ? (
            <>{search.trim()}</>
          ) : null}


        </AgentsListTitle>
        <Flex gap={2}>
          {isSearchExpanded ? (
            <Input
              placeholder={t('common.search')}
              className="nodrag"
              style={{ width: 200, height: 28, borderRadius: 15, paddingLeft: 12 }}
              size="small"
              variant="filled"
              allowClear
              onClear={handleSearchClear}
              suffix={<Search size={14} color="var(--color-icon)" onClick={handleSearchIconClick} />}
              value={searchInput}
              maxLength={50}
              onChange={handleSearchInputChange}
              onPressEnter={handleSearch}
              onBlur={handleSearchInputBlur}
              autoFocus
            />
          ) : (
            <Button
              type="text"
              onClick={handleSearchIconClick}
              icon={<Search size={18} color="var(--color-icon)" />}>
              {t('common.search')}
            </Button>
          )}
          <Button type="text" onClick={handleImportAgent} icon={<Import size={18} color="var(--color-icon)" />}>
            {t('assistants.presets.import.title')}
          </Button>
          <Button type="text" onClick={handleManageAgents} icon={<Settings2 size={18} color="var(--color-icon)" />}>
            {t('assistants.presets.manage.title')}
          </Button>
          <Button type="text" onClick={handleAddAgent} icon={<Plus size={18} color="var(--color-icon)" />}>
            {t('assistants.presets.add.title')}
          </Button>
        </Flex>
      </AgentsListHeader>

      {filteredPresets.length > 0 ? (
        <AgentsList>
          {filteredPresets.map((agent, index) => (
            <AssistantPresetCard
              key={agent.id || index}
              onClick={() => onAddPresetConfirm(getPresetFromUserPreset(agent))}
              getLocalizedGroupName={(g)=>g}
              preset={agent}
              activegroup="我的"
            />
          ))}
        </AgentsList>
      ) : (
        <EmptyView>
          <Empty description={t('assistants.presets.search.no_results')} />
        </EmptyView>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
`

const AgentsListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 16px 12px;
`

const AgentsListTitle = styled.div`
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  color: var(--color-text-1);
  display: flex;
  align-items: center;
  gap: 8px;
`



const AgentsList = styled(Scrollbar)`
  flex: 1;
  padding: 8px 16px 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 160px;
  gap: 16px;
`

const AgentDescription = styled.div`
  color: var(--color-text-2);
  font-size: 12px;
`

const AgentPrompt = styled.div`
  max-height: 60vh;
  overflow-y: scroll;
  background-color: var(--color-background-soft);
  padding: 8px;
  border-radius: 10px;
`

const EmptyView = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: var(--color-text-secondary);
`

export default AssistantPresetsPage
