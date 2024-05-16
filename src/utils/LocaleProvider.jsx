import React, { createContext, useState, useEffect } from 'react';
import i18n from './i18n';

export const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
 const [locale, setLocale] = useState(i18n.language);

 useEffect(() => {
    i18n.on('languageChanged', (lng) => {
      setLocale(lng);
    });
 }, []);

 const changeLocale = (lng) => {
    i18n.changeLanguage(lng);
 };

 return (
    <LocaleContext.Provider value={{ locale, changeLocale }}>
      {children}
    </LocaleContext.Provider>
 );
};