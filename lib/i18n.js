// lib/i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Only import browser-specific modules on client side
let LanguageDetector = null;
let HttpApi = null;

if (typeof window !== 'undefined') {
  // Dynamically import browser-specific modules
  try {
    LanguageDetector = require('i18next-browser-languagedetector').default;
    HttpApi = require('i18next-http-backend').default;
  } catch (e) {
    console.warn('Failed to load i18n modules:', e);
  }
}

const i18nConfig = {
  fallbackLng: 'en',
  debug: false, // Disable debug to prevent build issues
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  supportedLngs: ['en', 'ja'],
  // Default resources to prevent loading issues during build
  resources: {
    en: {
      translation: {
        "Home": "Home",
        "About": "About", 
        "Skills": "Skills",
        "Projects": "Projects",
        "Experience": "Experience",
        "Contact": "Contact",
        // Add other default translations as needed
      }
    },
    ja: {
      translation: {
        "Home": "ホーム",
        "About": "について",
        "Skills": "スキル", 
        "Projects": "プロジェクト",
        "Experience": "経験",
        "Contact": "お問い合わせ",
        // Add other default translations as needed
      }
    }
  }
};

// Only use browser-specific features on client side
if (typeof window !== 'undefined' && HttpApi && LanguageDetector) {
  i18nConfig.backend = {
    loadPath: '/locales/{{lng}}/{{ns}}.json'
  };
  i18nConfig.detection = {
    order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
    caches: ['localStorage', 'cookie'],
  };
  
  i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(i18nConfig);
} else {
  // Server-side or fallback initialization
  i18n
    .use(initReactI18next)
    .init(i18nConfig);
}

export default i18n
