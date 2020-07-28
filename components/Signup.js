import React, { useContext, useState } from "react";
import { KeyboardAvoidingView, Text, TextInput } from "react-native";
import PaddedView from "../elements/PaddedView";
import { tailwind, getColor } from "../lib/tailwind";
import countries from "../data/countries";
import { UserContext } from "../contexts/UserContext";
import localeSelect from "../services/localeSelect";
import { LanguageContext } from "../contexts/LanguageContext";
import {
	signup,
	email as emailLocale,
	password as passwordLocale,
	verifyPassword as verifyPasswordLocale,
} from "../data/locales";

export default function Signup() {
	const { loading, error, success, signup: doSignup } = useContext(UserContext);
	const { language } = useContext(LanguageContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [verifyPassword, setVerifyPassword] = useState("");
	return (
		<PaddedView>
			<KeyboardAvoidingView>
				<Text style={tailwind("text-lg text-center")}>
					{localeSelect(language, signup)}
				</Text>
				<TextInput
					value={email}
					onChangeText={(text) => {
						setEmail(text);
					}}
					placeholder={localeSelect(language, emailLocale)}
				/>
				<TextInput
					value={password}
					onChangeText={(text) => {
						setPassword(text);
					}}
					placeholder={localeSelect(language, passwordLocale)}
				/>
				<TextInput
					value={verifyPassword}
					onChangeText={(text) => {
						setVerifyPassword(text);
					}}
					placeholder={localeSelect(language, verifyPasswordLocale)}
				/>
			</KeyboardAvoidingView>
		</PaddedView>
	);
}
