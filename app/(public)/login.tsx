import React, { useState } from "react";
import axios from "axios";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import {
  TextInput,
  Button,
  HelperText,
  Text,
  useTheme,
} from "react-native-paper";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";

export default function LoginScreen() {
  const { t } = useTranslation();
  const theme = useTheme();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const doLogin = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const apiUrl = Constants?.expoConfig?.extra?.API_URL;
      const res = await axios.post(`${apiUrl}login`, {
        email,
        password,
      });
      const { token } = res.data.data;
      await AsyncStorage.setItem("token", token);
      router.replace("/");
    } catch (e: any) {
      setError(e?.message);
    }
    setIsLoading(false);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: "padding", android: undefined })}
    >
      <View style={styles.inner}>
        <Text variant="headlineMedium" style={styles.title}>
          Welcome Back
        </Text>

        <TextInput
          label={t("account.email")}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          style={styles.input}
        />

        <TextInput
          label={t("account.password")}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye-off" : "eye"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          style={styles.input}
        />

        {error && (
          <HelperText type="error" visible>
            {error}
          </HelperText>
        )}

        <Button
          mode="contained"
          onPress={doLogin}
          loading={isLoading}
          disabled={isLoading}
          contentStyle={styles.buttonContent}
          style={styles.button}
        >
          {t('header.login')}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    padding: 24,
  },
  inner: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 24,
    elevation: 2,
  },
  title: {
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  buttonContent: {
    height: 48,
  },
  button: {
    marginTop: 8,
  },
});
