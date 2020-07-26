import React, { useState, useContext } from "react";
import { View, Text, TextInput } from "react-native";
import { UserContext } from "../contexts/UserContext";
import PrimaryButton from "../elements/PrimaryButton";
import TextOnlyButton from "../elements/TextOnlyButton";
import PaddedView from "../elements/PaddedView";
import { tailwind } from "../lib/tailwind";
import localeSelect from "../services/localeSelect";
import { LanguageContext } from "../contexts/LanguageContext";
import { login, goBack } from "../data/locales";

export default function Login({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { doLogin, success, error } = useContext(UserContext);
	const { language } = useContext(LanguageContext);
	if (success) {
		return navigation.navigate("Home");
	}
	return (
		<PaddedView>
			<Text style={tailwind("text-lg text-center")}>Login</Text>
			<TextInput
				value={email}
				onChangeText={(text) => {
					setEmail(text);
				}}
				placeholder="Email Address"
				autoCapitalize="none"
				style={tailwind(
					"py-2 px-3 mx-3 my-4 border border-l-0 border-r-0 border-t-0 border-b border-black"
				)}
			/>
			<TextInput
				value={password}
				onChangeText={(text) => {
					setPassword(text);
				}}
				secureTextEntry
				placeholder="Password"
				autoCapitalize="none"
				style={tailwind(
					"py-2 px-3 mx-3 my-4 mb-8 border border-l-0 border-r-0 border-t-0 border-b border-black"
				)}
			/>
			<View style={tailwind("flex flex-row justify-start")}>
				<View style={tailwind("mr-2")}>
					<PrimaryButton
						onPress={() => {
							doLogin(email, password);
						}}
						text={localeSelect(language, login)}
					/>
				</View>
				<View>
					<TextOnlyButton
						onPress={() => {
							navigation.navigate("Home");
						}}
						text={localeSelect(language, goBack)}
					/>
				</View>
			</View>
		</PaddedView>
	);
}
