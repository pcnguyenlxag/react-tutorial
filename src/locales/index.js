import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import vi from './lang/vi.json'
import { themeConfig } from 'configs/theme.config'

const resources = {
    vi: {
        translation: vi
    }
}

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: themeConfig.locale,
    lng: themeConfig.locale,
    interpolation: {
        escapeValue: false
    }
})

export const dateLocales = {
    vi: () => import('dayjs/locale/vi'),
}

export default i18n