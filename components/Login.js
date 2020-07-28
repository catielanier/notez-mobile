import React, { useState, useContext } from "react";
import { View, Text, TextInput, ActivityIndicator } from "react-native";
import { UserContext } from "../contexts/UserContext";
import PrimaryButton from "../elements/PrimaryButton";
import TextOnlyButton from "../elements/TextOnlyButton";
import PaddedView from "../elements/PaddedView";
import { tailwind, getColor } from "../lib/tailwind";
import localeSelect from "../services/localeSelect";
import { LanguageContext } from "../contexts/LanguageContext";
import {
	login,
	goBack,
	email as emailLocale,
	password as passwordLocale,
} from "../data/locales";

export default function Login({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { doLogin, loading, error } = useContext(UserContext);
	const { language } = useContext(LanguageContext);

	return (
		<PaddedView>
			<Text style={tailwind("text-lg text-center")}>
				{localeSelect(language, login)}
				<ActivityIndicator
					animating={loading}
					size="small"
					color={getColor("orange-500")}
				/>
			</Text>
			<TextInput
				value={email}
				onChangeText={(text) => {
					setEmail(text);
				}}
				placeholder={localeSelect(language, emailLocale)}
				autoCapitalize="none"
				style={tailwind("py-2 px-3 mx-3 my-4 border-b border-black")}
			/>
			<TextInput
				value={password}
				onChangeText={(text) => {
					setPassword(text);
				}}
				secureTextEntry
				placeholder={localeSelect(language, passwordLocale)}
				autoCapitalize="none"
				style={tailwind("py-2 px-3 mx-3 my-4 mb-8 border-b border-black")}
			/>
			<View style={tailwind("flex flex-row justify-start")}>
				<View style={tailwind("mr-2")}>
					<PrimaryButton
						onPress={async () => {
							await doLogin(email, password, navigation);
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
