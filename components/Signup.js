import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Title, TextInput, Button } from "react-native-paper";

import { LanguageContext } from "../contexts/LanguageContext";
import { UserContext } from "../contexts/UserContext";

import localeSelect from "../services/localeSelect";
import {
  email as emailLocale,
  signup,
  password as passwordLocale,
} from "../data/locales";

export default function Signup() {
  const { signup: doSignup } = useContext(UserContext);
  const { language } = useContext(LanguageContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [username, setUsername] = useState("");
  const [realName, setRealName] = useState("");
  const [country, setCountry] = useState("");
  return (
    <View>
      <Title>{localeSelect(language, signup)}</Title>
    </View>
  );
}
