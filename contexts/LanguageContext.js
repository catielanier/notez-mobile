import React, { useState, createContext, useEffect } from "react";
import { Platform, NativeModules } from "react-native";

export const LanguageContext = createContext();

const LanguageContextProvider = (props) => {
  const [language, setLanguage] = useState(null);
  useEffect(() => {
    const locale =
      Platform.OS === "ios"
        ? NativeModules.SettingsManager.settings.AppleLocale
        : NativeModules.I18nManager.localeIdentifier;
    const index = locale.indexOf("zh");
    if (index !== 0) {
      const userLanguage = locale.split(/[-_]/)[0];
      setLanguage(userLanguage);
    } else {
      const userLanguage = locale;
      setLanguage(userLanguage);
    }
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
