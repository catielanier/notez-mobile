import React, { useState, useContext } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 20,
    paddingBottom: 320,
    flex: 1,
    justifyContent: "space-around",
  },
  textInput: {
    height: 40,
  },
});

export default function Login() {
  const { language } = useContext(LanguageContext);
  const { doLogin, loading } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inner}>
        <Title>{localeSelect(language, login)}</Title>
        <TextInput
          label={localeSelect(language, emailLocale)}
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.container}
          mode="outlined"
        />
        <TextInput
          label={localeSelect(language, passwordLocale)}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.container}
          mode="outlined"
        />
        <Button
          mode="contained"
          uppercase
          loading={loading}
          onPress={() => {
            setEmail(email.toLowerCase());
            doLogin(email, password);
          }}
        >
          {localeSelect(language, login)}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
