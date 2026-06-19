import { HStack } from '@renderer/components/Layout'
import { APP_NAME, AppLogo } from '@renderer/config/env'
import { useTheme } from '@renderer/context/ThemeProvider'
import { useMinappPopup } from '@renderer/hooks/useMinappPopup'
import { ThemeMode } from '@renderer/types'
import { runAsyncFunction } from '@renderer/utils'
import { Avatar, Button, Tooltip } from 'antd'
import { Briefcase, Bug, Building2, Github, Globe, Mail, Rss } from 'lucide-react'
import { BadgeQuestionMark } from 'lucide-react'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { SettingContainer, SettingDivider, SettingGroup, SettingRow } from '.'

const AboutSettings: FC = () => {
  const [version, setVersion] = useState('')
  const { t } = useTranslation()
  const { theme } = useTheme()
  const { openSmartMinapp } = useMinappPopup()

  const onOpenWebsite = (url: string) => {
    void window.api.openWebsite(url)
  }

  const mailto = async () => {
    const email = 'support@cherry-ai.com'
    const subject = `${APP_NAME} Feedback`
    const version = (await window.api.getAppInfo()).version
    const platform = window.electron.process.platform
    const url = `mailto:${email}?subject=${subject}&body=%0A%0AVersion: ${version} | Platform: ${platform}`
    onOpenWebsite(url)
  }

  const debug = async () => {
    await window.api.devTools.toggle()
  }

  const showEnterprise = async () => {
    onOpenWebsite('https://enterprise.cherry-ai.com')
  }

  const showReleases = async () => {
    const { appPath } = await window.api.getAppInfo()
    openSmartMinapp({
      id: 'cherrystudio-releases',
      name: t('settings.about.releases.title'),
      url: `file://${appPath}/resources/cherry-studio/releases.html?theme=${theme === ThemeMode.dark ? 'dark' : 'light'}`,
      logo: AppLogo
    })
  }

  const onOpenDocs = () => {
    onOpenWebsite('https://docs.cherry-ai.com')
  }

  useEffect(() => {
    void runAsyncFunction(async () => {
      const [appInfo] = await Promise.all([window.api.getAppInfo()])
      setVersion(appInfo.version)
//       setIsPortable(appInfo.isPortable)
    })
  }, [])

  return (
    <SettingContainer>
      <SettingGroup theme={theme}>
        <div className="settings-row">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <AboutHeader>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <AvatarWrapper>
                  <Avatar src={AppLogo} size={64} />
                </AvatarWrapper>
                <VersionWrapper>
                  <Title>{APP_NAME}</Title>
                  <HStack alignItems="center" gap={5}>
                    <Tooltip title={version}>
                      <Description>{t('settings.about.version', { version })}</Description>
                    </Tooltip>
                  </HStack>
                </VersionWrapper>
              </div>
            </AboutHeader>
          </div>
        </div>
      </SettingGroup>
      <SettingGroup theme={theme}>
        <SettingRow>
          <SettingRowTitle>
            <BadgeQuestionMark size={18} />
            {t('docs.title')}
          </SettingRowTitle>
          <Button onClick={onOpenDocs}>{t('settings.about.website.button')}</Button>
        </SettingRow>
        <SettingDivider />
        <SettingRow>
          <SettingRowTitle>
            <Rss size={18} />
            {t('settings.about.releases.title')}
          </SettingRowTitle>
          <Button onClick={showReleases}>{t('settings.about.releases.button')}</Button>
        </SettingRow>
        <SettingDivider />
        <SettingRow>
          <SettingRowTitle>
            <Globe size={18} />
            {t('settings.about.website.title')}
          </SettingRowTitle>
          <Button onClick={() => onOpenWebsite('https://cherry-ai.com')}>{t('settings.about.website.button')}</Button>
        </SettingRow>
        <SettingDivider />
        <SettingRow>
          <SettingRowTitle>
            <Github size={18} />
            {t('settings.about.feedback.title')}
          </SettingRowTitle>
          <Button onClick={() => onOpenWebsite('https://github.com/CherryHQ/cherry-studio/issues/new/choose')}>
            {t('settings.about.feedback.button')}
          </Button>
        </SettingRow>
        <SettingDivider />
        <SettingRow>
          <SettingRowTitle>
            <Building2 size={18} />
            {t('settings.about.enterprise.title')}
          </SettingRowTitle>
          <Button onClick={showEnterprise}>{t('settings.about.website.button')}</Button>
        </SettingRow>
        <SettingDivider />
        <SettingRow>
          <SettingRowTitle>
            <Mail size={18} />
            {t('settings.about.contact.title')}
          </SettingRowTitle>
          <Button onClick={mailto}>{t('settings.about.contact.button')}</Button>
        </SettingRow>
        <SettingDivider />
        <SettingRow>
          <SettingRowTitle>
            <Briefcase size={18} />
            {t('settings.about.careers.title')}
          </SettingRowTitle>
          <Button onClick={() => onOpenWebsite('https://www.cherry-ai.com/careers')}>
            {t('settings.about.careers.button')}
          </Button>
        </SettingRow>
        <SettingDivider />
        <SettingRow>
          <SettingRowTitle>
            <Bug size={18} />
            {t('settings.about.debug.title')}
          </SettingRowTitle>
          <Button onClick={debug}>{t('settings.about.debug.open')}</Button>
        </SettingRow>
      </SettingGroup>
    </SettingContainer>
  )
}

const AboutHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px 0;
`

const VersionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80px;
  justify-content: center;
  align-items: flex-start;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: var(--color-text-1);
  margin-bottom: 5px;
`

const Description = styled.div`
  font-size: 14px;
  color: var(--color-text-2);
  text-align: center;
`

const AvatarWrapper = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 15px;
`

export const SettingRowTitle = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: var(--color-text-1);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  .anticon {
    font-size: 16px;
    color: var(--color-text-1);
  }
`

export default AboutSettings
import { Briefcase, Bug, Building2, Github, Globe, Mail, Rss, Scale } from 'lucide-react'
      <SettingGroup theme={theme}>
        <SettingRow>
          <SettingRowTitle>
            <Scale size={18} />
            {'开源声明'}
          </SettingRowTitle>
        </SettingRow>
        <SettingDivider />
        <OpenSourceInfo>
          <p>本软件基于 <a href="#" onClick={(e) => { e.preventDefault(); onOpenWebsite('https://github.com/CherryHQ/cherry-studio') }}>Cherry Studio</a> (v1.9.9) 开源项目进行二次开发。</p>
          <p>上游许可证：<a href="#" onClick={(e) => { e.preventDefault(); onOpenWebsite('https://www.gnu.org/licenses/agpl-3.0.html') }}>GNU AGPL-3.0</a></p>
          <p>上游版权：Copyright (c) CherryHQ</p>
          <p style={{ marginTop: 8, fontSize: 12, color: 'var(--color-text-3)' }}>
            本软件以 AGPL-3.0 许可证分发，衍生作品须同样采用 AGPL-3.0。
            如需商用授权豁免，请联系上游：bd@cherry-ai.com
          </p>
        </OpenSourceInfo>
      </SettingGroup>
