import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Title, TextInput, Button } from "react-native-paper";

// Contexts
import { LanguageContext } from "../contexts/LanguageContext";
import { UserContext } from "../contexts/UserContext";

// Locales
import localeSelect from "../services/localeSelect";
import {
  email as emailLocale,
  login,
  password as passwordLocale,
} from "../data/locales";

export default function Login() {
  const { language } = useContext(LanguageContext);
  const { doLogin, loading } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Title>{localeSelect(language, login)}</Title>
      <TextInput
        label={localeSelect(language, emailLocale)}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label={localeSelect(language, passwordLocale)}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button
        mode="contained"
        uppercase
        loading={loading}
        onPress={() => {
          setEmail(email.toLowerCase);
          doLogin(email, password);
        }}
      >
        {localeSelect(language, login)}
      </Button>
    </View>
  );
}
