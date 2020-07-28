import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import ButtonContainer from "../elements/ButtonContainer";
import PrimaryButton from "../elements/PrimaryButton";
import { tailwind } from "../lib/tailwind";
import localeSelect from "../services/localeSelect";
import { LanguageContext } from "../contexts/LanguageContext";
import { UserContext } from "../contexts/UserContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { title, login, signup, logout } from "../data/locales";

export default function Header({ navigation }) {
	const { language } = useContext(LanguageContext);
	const { user, role, logout: doLogout } = useContext(UserContext);
	const { platform } = useContext(ThemeContext);
	return (
		<View
			style={tailwind(
				"bg-blue-500 px-3 pt-8 pb-3 flex flex-row justify-between"
			)}
		>
			<Text style={tailwind("text-left text-white text-2xl pt-1")}>
				{localeSelect(language, title)}
			</Text>
			<ButtonContainer style={tailwind("flex flex-row justify-end")}>
				{!user && (
					<>
						<View style={tailwind("mr-2")}>
							<PrimaryButton
								text={localeSelect(language, login)}
								onPress={() => {
									navigation.navigate("Login");
								}}
							/>
						</View>
						<View>
							<PrimaryButton
								text={localeSelect(language, signup)}
								onPress={() => {
									navigation.navigate("Signup");
								}}
							/>
						</View>
					</>
				)}
				{user && (
					<View>
						<PrimaryButton
							text={localeSelect(language, logout)}
							onPress={() => {
								doLogout();
							}}
						/>
					</View>
				)}
			</ButtonContainer>
		</View>
	);
}
