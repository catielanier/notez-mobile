import React, { useContext, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  ScrollView,
} from "react-native";
import { Title, TextInput, Button } from "react-native-paper";
import SearchableDropdown from "react-native-searchable-dropdown";

import { LanguageContext } from "../contexts/LanguageContext";
import { UserContext } from "../contexts/UserContext";

import localeSelect from "../services/localeSelect";
import dbLocale from "../services/dbLocale";
import {
  email as emailLocale,
  signup,
  password as passwordLocale,
  verifyPassword as verifyPasswordLocale,
  username as usernameLocale,
  realName as realNameLocale,
  country as countryLocale,
} from "../data/locales";
import countries from "../data/countries";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 20,
    flex: 1,
    justifyContent: "space-around",
  },
  textInput: {
    height: 40,
  },
  searchableDropdown: {
    height: 40,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    marginVertical: 5,
    fontSize: 16,
  },
  itemContainer: {
    maxHeight: 140,
  },
  itemStyle: {
    paddingHorizontal: 12,
    backgroundColor: "#aaa",
    paddingVertical: 30,
  },
});

export default function Signup() {
  const { signup: doSignup, loading, success } = useContext(UserContext);
  const { language } = useContext(LanguageContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [username, setUsername] = useState("");
  const [realName, setRealName] = useState("");
  const [country, setCountry] = useState("");
  const countryOptions = [];
  countries.map((item) => {
    const value = {
      value: JSON.stringify(item.value),
      name: dbLocale(language, item),
    };
    countryOptions.push(value);
  });
  return (
    <View style={styles.inner}>
      <ScrollView>
        <Title>{localeSelect(language, signup)}</Title>
        <TextInput
          label={localeSelect(language, emailLocale)}
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.textInput}
          mode="outlined"
        />
        <TextInput
          label={localeSelect(language, passwordLocale)}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.textInput}
          mode="outlined"
        />
        <TextInput
          label={localeSelect(language, verifyPasswordLocale)}
          value={verifyPassword}
          onChangeText={(text) => setVerifyPassword(text)}
          secureTextEntry
          style={styles.textInput}
          mode="outlined"
        />
        <TextInput
          label={localeSelect(language, usernameLocale)}
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.textInput}
          mode="outlined"
        />
        <TextInput
          label={localeSelect(language, realNameLocale)}
          value={realName}
          onChangeText={(text) => setRealName(text)}
          style={styles.textInput}
          mode="outlined"
        />
        <SearchableDropdown
          placeholder={localeSelect(language, countryLocale)}
          textInputStyle={styles.searchableDropdown}
          itemStyle={{
            paddingHorizontal: 12,
            backgroundColor: "#fff",
            paddingVertical: 12,
          }}
          itemsContainerStyle={{ maxHeight: 240 }}
          items={countryOptions}
          onItemSelect={(item) => {
            console.log(item);
          }}
          textInputProps={{ textInputChange: (text) => alert(text) }}
        />
        <Button
          mode="contained"
          uppercase
          loading={loading}
          onPress={() => {
            setEmail(email.toLowerCase);
            doSignup(email, password);
          }}
        >
          {localeSelect(language, signup)}
        </Button>
      </ScrollView>
    </View>
  );
}
