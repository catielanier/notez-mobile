import React, { useContext, useState } from "react";
import {
	ActivityIndicator,
	KeyboardAvoidingView,
	Text,
	TextInput,
} from "react-native";
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
	username as usernameLocale,
	realName as realNameLocale,
	country as countryLocale,
} from "../data/locales";

export default function Signup() {
	const { loading, error, success, signup: doSignup } = useContext(UserContext);
	const { language } = useContext(LanguageContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [verifyPassword, setVerifyPassword] = useState("");
	const [username, setUsername] = useState("");
	const [realName, setRealName] = useState("");
	const [country, setCountry] = useState("");
	return (
		<PaddedView>
			<Text style={tailwind("text-lg text-center")}>
				{localeSelect(language, signup)}
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
				style={tailwind("py-2 px-3 mx-3 my-1 border-b border-black")}
			/>
			<TextInput
				value={password}
				onChangeText={(text) => {
					setPassword(text);
				}}
				placeholder={localeSelect(language, passwordLocale)}
				style={tailwind("py-2 px-3 mx-3 my-1 border-b border-black")}
			/>
			<TextInput
				value={verifyPassword}
				onChangeText={(text) => {
					setVerifyPassword(text);
				}}
				placeholder={localeSelect(language, verifyPasswordLocale)}
				style={tailwind("py-2 px-3 mx-3 my-1 border-b border-black")}
			/>
			<TextInput
				value={username}
				onChangeText={(text) => {
					setUsername(text);
				}}
				placeholder={localeSelect(language, usernameLocale)}
				style={tailwind("py-2 px-3 mx-3 my-1 border-b border-black")}
			/>
			<TextInput
				value={realName}
				onChangeText={(text) => {
					setRealName(text);
				}}
				placeholder={localeSelect(language, realNameLocale)}
				style={tailwind("py-2 px-3 mx-3 my-1 border-b border-black")}
			/>
		</PaddedView>
	);
}
