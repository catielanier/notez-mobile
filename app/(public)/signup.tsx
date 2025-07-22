// app/(public)/signup.tsx
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  TextInput,
  Button,
  HelperText,
  Text,
  useTheme,
  Snackbar,
} from "react-native-paper";
import { Dropdown } from "react-native-paper-dropdown";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Constants from "expo-constants";
import { useRouter } from "expo-router";
import getCountries from "@/utils/getCountries";
import { Dropdown as CountryType } from "@/data/types";

export default function SignupScreen() {
  const theme = useTheme();
  const router = useRouter();
  const { t, i18n } = useTranslation();

  // form state
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [realName, setRealName] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  // country dropdown state
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [country, setCountry] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState(false);

  // status state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // load countries on mount or language change
  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const list = await getCountries(i18n.language);
        if (active) setCountries(list);
      } catch {
        if (active) setCountries([]);
      }
    })();
    return () => {
      active = false;
    };
  }, [i18n.language]);

  const doSignup = async () => {
    setIsLoading(true);
    setError(null);

    // client-side checks
    if (password !== verifyPassword) {
      setError(t("Passwords do not match"));
      setIsLoading(false);
      return;
    }
    if (!country) {
      setError(t("Please select a country"));
      setIsLoading(false);
      return;
    }

    try {
      const apiUrl = Constants.expoConfig?.extra?.API_URL;
      await axios.post(`${apiUrl}/users/signup`, {
        email: email.toLowerCase(),
        username,
        realName,
        password,
        verifyPassword,
        country, // back-end gets the code; look up label if needed
      });
      setSuccess(true);
      setTimeout(() => router.replace("/login"), 1200);
    } catch (e: any) {
      setError(e.response?.data?.message || e.message || t("Signup failed"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.select({ ios: "padding", android: undefined })}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text variant="headlineMedium" style={styles.title}>
          {t("header.signup")}
        </Text>

        <TextInput
          label={t("account.email")}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <TextInput
          label={t("account.password")}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        <TextInput
          label={t("account.verify")}
          value={verifyPassword}
          onChangeText={setVerifyPassword}
          secureTextEntry
          style={styles.input}
        />

        <TextInput
          label={t("account.username")}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          style={styles.input}
        />

        <TextInput
          label={t("account.realname")}
          value={realName}
          onChangeText={setRealName}
          style={styles.input}
        />

        {/* react-native-paper-dropdown */}
        <View style={styles.dropdownWrapper}>
          <Dropdown
            label={t("account.country")}
            mode="outlined"
            value={country}
            onSelect={(newValue) => setCountry(newValue ?? "")}
            options={countries}
            menuContentStyle={{ backgroundColor: theme.colors.surface }}
            menuUpIcon={<Text style={{ color: theme.colors.onSurface }}>▲</Text>}
            menuDownIcon={<Text style={{ color: theme.colors.onSurface }}>▼</Text>}
          />
        </View>

        {error && (
          <HelperText type="error" visible style={styles.errorText}>
            {error}
          </HelperText>
        )}

        <Button
          mode="contained"
          onPress={doSignup}
          loading={isLoading}
          disabled={isLoading}
          contentStyle={styles.buttonContent}
          style={styles.button}
        >
          {t("header.signup")}
        </Button>
      </ScrollView>

      <Snackbar
        visible={success}
        onDismiss={() => setSuccess(false)}
        duration={1500}
      >
        {t("Signup successful! Redirecting…")}
      </Snackbar>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: "transparent",
  },
  container: {
    padding: 24,
    alignItems: "stretch",
  },
  title: {
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  dropdownWrapper: {
    marginBottom: 16,
    zIndex: 1000, // ensure dropdown overlays correctly
  },
  errorText: {
    marginBottom: 8,
  },
  button: {
    marginTop: 8,
  },
  buttonContent: {
    height: 48,
  },
});
