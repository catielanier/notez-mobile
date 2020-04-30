import React, { useContext } from "react";
import { Appbar } from "react-native-paper";

// Contexts
import { UserContext } from "../contexts/UserContext";
import { LanguageContext } from "../contexts/LanguageContext";
import { MenuContext } from "../contexts/MenuContext";

// Locales
import localeSelect from "../services/localeSelect";
import { title } from "../data/locales";

function Header({ navigation }) {
  const { user } = useContext(UserContext);
  const { language } = useContext(LanguageContext);
  const { showMenu } = useContext(MenuContext);
  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={showMenu} />
      {!user && (
        <>
          <Appbar.Content
            title={localeSelect(language, title)}
            color="#ffffff"
          />
          <Appbar.Action
            icon="login"
            color="#ffffff"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
          <Appbar.Action
            icon="account-plus"
            color="#ffffff"
            onPress={() => {
              navigation.navigate("Signup");
            }}
          />
        </>
      )}
      {user && (
        <>
          <Appbar.Content
            title={localeSelect(language, title)}
            color="#ffffff"
          />
        </>
      )}
    </Appbar.Header>
  );
}

export default Header;
