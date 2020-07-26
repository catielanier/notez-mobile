import React, { useState, useContext } from "react";
import { View, Text, TextInput } from "react-native";
import { UserContext } from "../contexts/UserContext";
import PrimaryButton from "../elements/PrimaryButton";
import { tailwind } from "../lib/tailwind";
import localeSelect from "../services/localeSelect";
import { LanguageContext } from "../contexts/LanguageContext";
import { login } from "../data/locales";

export default function Login({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { doLogin, success, error } = useContext(UserContext);
	const { language } = useContext(LanguageContext);
	if (success) {
		return navigation.navigate("Home");
	}
	return (
		<View>
			<Text>Login</Text>
			<TextInput
				value={email}
				onChange={(text) => {
					setEmail(text);
				}}
				placeholder="Email Address"
			/>
			<TextInput
				value={password}
				onChange={(text) => {
					setPassword(text);
				}}
				secureTextEntry
				placeholder="Password"
			/>
			<PrimaryButton
				onPress={() => {
					doLogin(email, password);
				}}
				text={localeSelect(language, login)}
			/>
		</View>
	);
}
