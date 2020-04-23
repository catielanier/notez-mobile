import React from "react";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import LanguageContextProvider from "./contexts/LanguageContext";
import ComponentContainer from "./ComponentContainer";
import UserContextProvider from "./contexts/UserContext";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2196f3",
    accent: "#ff9100",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <LanguageContextProvider>
        <UserContextProvider>
          <ComponentContainer />
        </UserContextProvider>
      </LanguageContextProvider>
    </PaperProvider>
  );
}
