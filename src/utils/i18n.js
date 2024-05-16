import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './../assets/i18n/en.json'
import deTranslation from './../assets/i18n/de.json'
import arTranslation from './../assets/i18n/ar.json'
import esTranslation from './../assets/i18n/es.json'
import frTranslation from './../assets/i18n/fr.json'
import idTranslation from './../assets/i18n/id.json'
import itTranslation from './../assets/i18n/it.json'
import ptTranslation from './../assets/i18n/pt.json'
import roTranslation from './../assets/i18n/ro.json'
import swTranslation from './../assets/i18n/sw.json'
import trTranslation from './../assets/i18n/tr.json'

i18n
 .use(initReactI18next)
 .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      de: {
        translation: deTranslation,
      },
      ar: {
        translation: arTranslation
      },
      es: {
        translation: esTranslation
      },
      fr: {
        translation: frTranslation
      },
      id: {
        translation: idTranslation
      },
      it: {
        translation: itTranslation
      },
      pt: {
        translation: ptTranslation
      },
      ro: {
        translation: roTranslation
      },
      sw: {
        translation: swTranslation
      },
      tr: {
        translation: trTranslation
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
 });

export default i18n;