import React, { useState, useContext } from "react";
import { View, Text, TextInput } from "react-native";
import { UserContext } from "../contexts/UserContext";
import { tailwind } from "../lib/tailwind";

export default function Login({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { doLogin, success, error } = useContext(UserContext);
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
		</View>
	);
}
