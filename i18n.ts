import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "react-native-localize";
import en from "./locales/en/translation.json";
import es from "./locales/es/translation.json";
import fr from "./locales/fr/translation.json";
import it from "./locales/it/translation.json";
import ja from "./locales/ja/translation.json";
import ko from "./locales/ko/translation.json";
import pt from "./locales/pt/translation.json";
import ru from "./locales/ru/translation.json";
import zh from "./locales/zh/translation.json";
import zhCN from "./locales/zh-cn/translation.json";

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  es: { translation: es },
  it: { translation: it },
  ja: { translation: ja },
  ko: { translation: ko },
  pt: { translation: pt },
  ru: { translation: ru },
  zh: { translation: zh },
  "zh-CN": { translation: zhCN },
};

const fallback = { languageTag: "en", isRTL: false };
const { languageTag } =
  getLocales().find((locale) =>
    Object.keys(resources).includes(locale.languageTag)
  ) || fallback;

i18n.use(initReactI18next).init({
  resources,
  lng: languageTag,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
