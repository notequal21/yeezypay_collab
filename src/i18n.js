import en from './translate/en.json';
import ru from './translate/ru.json';

import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: JSON.parse(localStorage.getItem('language')),
  fallbackLng: 'en',
});

export default i18next;
