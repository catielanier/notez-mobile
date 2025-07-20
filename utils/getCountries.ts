import { Dropdown } from "@/data/types";
import axios from "axios";

const getCountries = async (language: string): Promise<Dropdown> => {
  const res = await axios.get("https://restcountries.com/v3.1/all");
  const unrefinedCountres = res.data;
  const langTwoCharCode: string = language[0] + language[1];

  const countryData = unrefinedCountres.map((country: any): Dropdown => {
    switch (langTwoCharCode) {
      case "ko":
        return {
          label: country.translations.kor.common,
          value: country.cca3,
        };
      case "ja":
        return {
          label: country.translations.jpn.common,
          value: country.cca3,
        };
      case "zh":
        if (country.name.nativeName.zho) {
          return {
            label: country.name.nativeName.zho.common,
            value: country.cca3,
          };
        } else {
          return {
            label: country.translations.zho.common,
            value: country.cca3,
          };
        }
      case "es":
        return {
          label: country.translations.spa.common,
          value: country.cca3,
        };
      case "pt":
        return {
          label: country.translations.por.common,
          value: country.cca3,
        };
      case "it":
        return {
          label: country.translations.ita.common,
          value: country.cca3,
        };
      case "ru":
        return {
          label: country.translations.rus.common,
          value: country.cca3,
        };
      default:
        return {
          label: country.name.common,
          value: country.cca3,
        };
    }
  });
  countryData.sort((a: Dropdown, b: Dropdown) => {
    return a.label.localeCompare(b.label);
  });
  return countryData;
};
