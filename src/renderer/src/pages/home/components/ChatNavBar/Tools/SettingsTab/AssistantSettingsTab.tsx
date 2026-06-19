import EditableNumber from '@renderer/components/EditableNumber'
import Scrollbar from '@renderer/components/Scrollbar'
import Selector from '@renderer/components/Selector'
import { HelpTooltip } from '@renderer/components/TooltipIcons'
import { isOpenAIModel, isSupportVerbosityModel } from '@renderer/config/models'
import { UNKNOWN } from '@renderer/config/translate'

import { useTheme } from '@renderer/context/ThemeProvider'
import { useAssistant } from '@renderer/hooks/useAssistant'
import { useProvider } from '@renderer/hooks/useProvider'
import { useSettings } from '@renderer/hooks/useSettings'
import useTranslate from '@renderer/hooks/useTranslate'
import { SettingDivider, SettingRow, SettingRowTitle } from '@renderer/pages/settings'
import { CollapsibleSettingGroup } from '@renderer/pages/settings/SettingGroup'
import { getDefaultModel } from '@renderer/services/AssistantService'
import { useAppDispatch } from '@renderer/store'
import type { Assistant } from '@renderer/types'
import type { SendMessageShortcut } from '@renderer/store/settings'

import {
  setAutoTranslateWithSpace,

  setConfirmDeleteMessage,
  setConfirmRegenerateMessage,
  setEnableQuickPanelTriggers,
  setFontSize,
  setMessageFont,
  setMessageNavigation,
  setMessageStyle,
  setMultiModelMessageStyle,
  setPasteLongTextAsFile,
  setPasteLongTextThreshold,
  setRenderInputMessageAsMarkdown,
  setShowInputEstimatedTokens,
  setShowMessageOutline,
  setShowPrompt,
  setShowTranslateConfirm,
  setThoughtAutoCollapse
} from '@renderer/store/settings'
import { isGroqSystemProvider, ThemeMode } from '@renderer/types'
import { getSendMessageShortcutLabel } from '@renderer/utils/input'
import {
  isOpenAICompatibleProvider,
  isSupportServiceTierProvider,
  isSupportVerbosityProvider
} from '@renderer/utils/provider'
import { Col, Row, Slider, Switch } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import GroqSettingsGroup from './GroqSettingsGroup'
import OpenAISettingsGroup from './OpenAISettingsGroup'

interface Props {
  assistant: Assistant
}

const AssistantSettingsTab = (props: Props) => {
  const { assistant } = useAssistant(props.assistant.id)
  const { provider } = useProvider(assistant.model.provider)

  const { messageStyle, fontSize, language } = useSettings()
  useTheme() // keep hook for context

  const [fontSizeValue, setFontSizeValue] = useState(fontSize)
  const { translateLanguages } = useTranslate()

  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const {
    showPrompt,
    messageFont,
    showInputEstimatedTokens,
    sendMessageShortcut,
    setSendMessageShortcut,
    targetLanguage,
    setTargetLanguage,
    pasteLongTextAsFile,
    renderInputMessageAsMarkdown,

    autoTranslateWithSpace,
    pasteLongTextThreshold,
    multiModelMessageStyle,
    thoughtAutoCollapse,
    messageNavigation,
    enableQuickPanelTriggers,
    showTranslateConfirm,
    showMessageOutline,
    confirmDeleteMessage,
    confirmRegenerateMessage
  } = useSettings()

  const model = assistant.model || getDefaultModel()

  const showOpenAiSettings =
    isOpenAICompatibleProvider(provider) ||
    isOpenAIModel(model) ||
    isSupportServiceTierProvider(provider) ||
    (isSupportVerbosityModel(model) && isSupportVerbosityProvider(provider))

  return (
    <Container className="settings-tab">
      {showOpenAiSettings && (
        <OpenAISettingsGroup
          model={model}
          providerId={provider.id}
          SettingGroup={SettingGroup}
          SettingRowTitleSmall={SettingRowTitleSmall}
        />
      )}
      {isGroqSystemProvider(provider) && (
        <GroqSettingsGroup SettingGroup={SettingGroup} SettingRowTitleSmall={SettingRowTitleSmall} />
      )}
      <CollapsibleSettingGroup title={t('settings.messages.title')} defaultExpanded={true}>
        <SettingGroup>
          <SettingRow>
            <SettingRowTitleSmall>{t('settings.messages.prompt')}</SettingRowTitleSmall>
            <Switch size="small" checked={showPrompt} onChange={(checked) => dispatch(setShowPrompt(checked))} />
          </SettingRow>
          <SettingDivider />
          <SettingRow>
            <SettingRowTitleSmall>{t('settings.messages.use_serif_font')}</SettingRowTitleSmall>
            <Switch
              size="small"
              checked={messageFont === 'serif'}
              onChange={(checked) => dispatch(setMessageFont(checked ? 'serif' : 'system'))}
            />
          </SettingRow>
          <SettingDivider />
          <SettingRow>
            <SettingRowTitleSmall>
              {t('chat.settings.thought_auto_collapse.label')}
              <HelpTooltip title={t('chat.settings.thought_auto_collapse.tip')} />
            </SettingRowTitleSmall>
            <Switch
              size="small"
              checked={thoughtAutoCollapse}
              onChange={(checked) => dispatch(setThoughtAutoCollapse(checked))}
            />
          </SettingRow>
          <SettingDivider />
          <SettingRow>
            <SettingRowTitleSmall>{t('settings.messages.show_message_outline')}</SettingRowTitleSmall>
            <Switch
              size="small"
              checked={showMessageOutline}
              onChange={(checked) => dispatch(setShowMessageOutline(checked))}
            />
          </SettingRow>
          <SettingDivider />
          <SettingRow>
            <SettingRowTitleSmall>{t('message.message.style.label')}</SettingRowTitleSmall>
            <Selector
              value={messageStyle}
              onChange={(value) => dispatch(setMessageStyle(value))}
              options={[
                { value: 'plain', label: t('message.message.style.plain') },
                { value: 'bubble', label: t('message.message.style.bubble') }
              ]}
            />
          </SettingRow>
          <SettingDivider />

          <SettingRow>
            <SettingRowTitleSmall>{t('message.message.multi_model_style.label')}</SettingRowTitleSmall>
            <Selector
              value={multiModelMessageStyle}
              onChange={(value) => dispatch(setMultiModelMessageStyle(value))}
              options={[
                { value: 'fold', label: t('message.message.multi_model_style.fold.label') },
                { value: 'vertical', label: t('message.message.multi_model_style.vertical') },
                { value: 'horizontal', label: t('message.message.multi_model_style.horizontal') },
                { value: 'grid', label: t('message.message.multi_model_style.grid') }
              ]}
            />
          </SettingRow>
          <SettingDivider />
          <SettingRow>
            <SettingRowTitleSmall>{t('settings.messages.navigation.label')}</SettingRowTitleSmall>
            <Selector
              value={messageNavigation}
              onChange={(value) => dispatch(setMessageNavigation(value))}
              options={[
                { value: 'none', label: t('settings.messages.navigation.none') },
                { value: 'buttons', label: t('settings.messages.navigation.buttons') },
                { value: 'anchor', label: t('settings.messages.navigation.anchor') }
              ]}
            />
          </SettingRow>
          <SettingDivider />
          <SettingRow>
            <SettingRowTitleSmall>{t('settings.font_size.title')}</SettingRowTitleSmall>
          </SettingRow>
          <Row align="middle" gutter={10}>
            <Col span={24}>
              <Slider
                value={fontSizeValue}
                onChange={(value) => setFontSizeValue(value)}
                onChangeComplete={(value) => dispatch(setFontSize(value))}
                min={12}
                max={22}
                step={1}
                marks={{
                  12: <span style={{ fontSize: '12px' }}>A</span>,
                  14: <span style={{ fontSize: '14px' }}>{t('common.default')}</span>,
                  22: <span style={{ fontSize: '18px' }}>A</span>
                }}
              />
            </Col>
          </Row>
          <SettingDivider />
        </SettingGroup>
      </CollapsibleSettingGroup>
      <CollapsibleSettingGroup title={t('settings.messages.input.title')} defaultExpanded={false}>
        <SettingGroup>
          <SettingRow>
            <SettingRowTitleSmall>{t('settings.messages.input.show_estimated_tokens')}</SettingRowTitleSmall>
            <Switch
              size="small"
              checked={showInputEstimatedTokens}
              onChange={(checked) => dispatch(setShowInputEstimatedTokens(checked))}
            />
          </SettingRow>
          <SettingDivider />
          <SettingRow>
            <SettingRowTitleSmall>{t('settings.messages.input.paste_long_text_as_file')}</SettingRowTitleSmall>
            <Switch
              size="small"
              checked={pasteLongTextAsFile}
              onChange={(checked) => dispatch(setPasteLongTextAsFile(checked))}
            />
          </SettingRow>
          {pasteLongTextAsFile && (
            <>
              <SettingDivider />
              <SettingRow>
                <SettingRowTitleSmall>{t('settings.messages.input.paste_long_text_threshold')}</SettingRowTitleSmall>
                <EditableNumber
                  size="small"
                  min={500}
                  max={10000}
                  step={100}
                  value={pasteLongTextThreshold}
                  onChange={(value) => dispatch(setPasteLongTextThreshold(value ?? 500))}
                  style={{ width: 80 }}
                />
              </SettingRow>
            </>
          )}
          <SettingDivider />
          <SettingRow>
            <SettingRowTitleSmall>{t('settings.messages.markdown_rendering_input_message')}</SettingRowTitleSmall>
            <Switch
              size="small"
              checked={renderInputMessageAsMarkdown}
              onChange={(checked) => dispatch(setRenderInputMessageAsMarkdown(checked))}
            />
          </SettingRow>
          <SettingDivider />
          {!language.startsWith('en') && (
            <>
              <SettingRow>
                <SettingRowTitleSmall>{t('settings.input.auto_translate_with_space')}</SettingRowTitleSmall>
                <Switch
                  size="small"
                  checked={autoTranslateWithSpace}
                  onChange={(checked) => dispatch(setAutoTranslateWithSpace(checked))}
                />
              </SettingRow>
              <SettingDivider />
            </>
          )}
          <SettingRow>
            <SettingRowTitleSmall>{t('settings.input.show_translate_confirm')}</SettingRowTitleSmall>
            <Switch
              size="small"
              checked={showTranslateConfirm}
              onChange={(checked) => dispatch(setShowTranslateConfirm(checked))}
            />
          </SettingRow>
          <SettingDivider />
          <SettingRow>
            <SettingRowTitleSmall>{t('settings.messages.input.enable_quick_triggers')}</SettingRowTitleSmall>
            <Switch
              size="small"
              checked={enableQuickPanelTriggers}
              onChange={(checked) => dispatch(setEnableQuickPanelTriggers(checked))}
            />
          </SettingRow>
          <SettingDivider />
          <SettingRow>
            <SettingRowTitleSmall>{t('settings.messages.input.confirm_delete_message')}</SettingRowTitleSmall>
            <Switch
              size="small"
              checked={confirmDeleteMessage}
              onChange={(checked) => dispatch(setConfirmDeleteMessage(checked))}
            />
          </SettingRow>
          <SettingDivider />
          <SettingRow>
            <SettingRowTitleSmall>{t('settings.messages.input.confirm_regenerate_message')}</SettingRowTitleSmall>
            <Switch
              size="small"
              checked={confirmRegenerateMessage}
              onChange={(checked) => dispatch(setConfirmRegenerateMessage(checked))}
            />
          </SettingRow>
          <SettingDivider />
          <SettingRow>
            <SettingRowTitleSmall>{t('settings.input.target_language.label')}</SettingRowTitleSmall>
            <Selector
              value={targetLanguage}
              onChange={(value) => setTargetLanguage(value)}
              placeholder={UNKNOWN.emoji + ' ' + UNKNOWN.label()}
              options={translateLanguages.map((item) => {
                return { value: item.langCode, label: item.emoji + ' ' + item.label() }
              })}
            />
          </SettingRow>
          <SettingDivider />
          <SettingRow>
            <SettingRowTitleSmall>{t('settings.messages.input.send_shortcuts')}</SettingRowTitleSmall>
            <Selector
              value={sendMessageShortcut}
              onChange={(value) => setSendMessageShortcut(value as SendMessageShortcut)}
              options={[
                { value: 'Enter', label: getSendMessageShortcutLabel('Enter') },
                { value: 'Ctrl+Enter', label: getSendMessageShortcutLabel('Ctrl+Enter') },
                { value: 'Alt+Enter', label: getSendMessageShortcutLabel('Alt+Enter') },
                { value: 'Command+Enter', label: getSendMessageShortcutLabel('Command+Enter') },
                { value: 'Shift+Enter', label: getSendMessageShortcutLabel('Shift+Enter') }
              ]}
            />
          </SettingRow>
        </SettingGroup>
      </CollapsibleSettingGroup>
    </Container>
  )
}

const Container = styled(Scrollbar)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 8px;
  padding-right: 0;
  padding-top: 2px;
  padding-bottom: 10px;
  margin-top: 3px;
`

const SettingRowTitleSmall = styled(SettingRowTitle)`
  font-size: 13px;
  gap: 4px;
`

const SettingGroup = styled.div<{ theme?: ThemeMode }>`
  padding: 0 5px;
  width: 100%;
  margin-top: 0;
  border-radius: 8px;
  margin-bottom: 10px;
`

export default AssistantSettingsTab
