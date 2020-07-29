import React, { useContext, useState } from "react";
import {
	ActivityIndicator,
	KeyboardAvoidingView,
	Text,
	TextInput,
	View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import PrimaryButton from "../elements/PrimaryButton";
import SecondaryButton from "../elements/SecondaryButton";
import { tailwind, getColor } from "../lib/tailwind";
import countries from "../data/countries";
import { UserContext } from "../contexts/UserContext";
import localeSelect from "../services/localeSelect";
import dbLocale from "../services/dbLocale";
import { LanguageContext } from "../contexts/LanguageContext";
import {
	signup,
	email as emailLocale,
	password as passwordLocale,
	verifyPassword as verifyPasswordLocale,
	username as usernameLocale,
	realName as realNameLocale,
	country as countryLocale,
	next,
	goBack,
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
	const [formPart, setFormPart] = useState(1);
	return (
		<KeyboardAvoidingView style={tailwind("pt-3 px-2")}>
			<Text style={tailwind("text-lg text-center")}>
				{localeSelect(language, signup)}
				<ActivityIndicator
					animating={loading}
					size="small"
					color={getColor("orange-500")}
				/>
			</Text>
			{formPart === 1 && (
				<>
					<TextInput
						value={email}
						onChangeText={(text) => {
							setEmail(text);
						}}
						placeholder={localeSelect(language, emailLocale)}
						style={tailwind("py-2 px-3 mx-3 my-4 border-b border-black")}
						autoCapitalize="none"
					/>
					<TextInput
						value={password}
						onChangeText={(text) => {
							setPassword(text);
						}}
						placeholder={localeSelect(language, passwordLocale)}
						style={tailwind("py-2 px-3 mx-3 my-4 border-b border-black")}
						autoCapitalize="none"
					/>
					<TextInput
						value={verifyPassword}
						onChangeText={(text) => {
							setVerifyPassword(text);
						}}
						placeholder={localeSelect(language, verifyPasswordLocale)}
						style={tailwind("py-2 px-3 mx-3 my-4 mb-8 border-b border-black")}
					/>
				</>
			)}
			{formPart === 2 && (
				<>
					<TextInput
						value={username}
						onChangeText={(text) => {
							setUsername(text);
						}}
						placeholder={localeSelect(language, usernameLocale)}
						style={tailwind("py-2 px-3 mx-3 my-4 border-b border-black")}
					/>
					<TextInput
						value={realName}
						onChangeText={(text) => {
							setRealName(text);
						}}
						placeholder={localeSelect(language, realNameLocale)}
						style={tailwind("py-2 px-3 mx-3 my-4 mb-8 border-b border-black")}
					/>
				</>
			)}
			{formPart === 3 && (
				<DropDownPicker
					items={countries.map((item) => {
						return { value: item.value, label: dbLocale(language, item) };
					})}
					containerStyle={tailwind("h-10 mx-3 my-4 mb-8")}
					dropDownStyle={tailwind("bg-white")}
					onChangeItem={(item) => setCountry(item.value)}
					itemStyle={{ justifyContent: "flex-start" }}
					searchable={true}
					placeholder={localeSelect(language, countryLocale)}
					searchablePlaceholder="Search"
				/>
			)}
			<View style={tailwind("flex flex-row justify-start")}>
				{formPart > 1 && (
					<View style={tailwind("mr-2")}>
						<SecondaryButton
							text={localeSelect(language, goBack)}
							onPress={() => {
								setFormPart(formPart - 1);
							}}
						/>
					</View>
				)}
				<View style={tailwind("mr-2")}>
					<PrimaryButton
						text={
							formPart < 3
								? localeSelect(language, next)
								: localeSelect(language, signup)
						}
						onPress={() => {
							if (formPart < 3) {
								setFormPart(formPart + 1);
							}
							if (formPart === 3) {
								setEmail(email.toLowerCase());
								doSignup(
									email,
									password,
									verifyPassword,
									username,
									realName,
									country
								);
							}
						}}
					/>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
}
