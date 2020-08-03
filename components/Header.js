import React, { useContext, useState, useEffect } from "react";
import { View, Text } from "react-native";
import ButtonContainer from "../elements/ButtonContainer";
import HeaderButton from "../elements/HeaderButton";
import { tailwind } from "../lib/tailwind";
import localeSelect from "../services/localeSelect";
import { LanguageContext } from "../contexts/LanguageContext";
import { UserContext } from "../contexts/UserContext";
import { title } from "../data/locales";
import { useNavigationState } from "@react-navigation/native";

export default function Header({ route, navigation }) {
	const { language } = useContext(LanguageContext);
	const { user, currentScreen } = useContext(UserContext);
	console.log(currentScreen);
	return (
		<View
			style={tailwind(
				"bg-blue-500 px-3 pt-8 pb-3 flex flex-row justify-between"
			)}
		>
			<View style={tailwind("flex flex-row justify-start")}>
				<View style={tailwind("mr-2")}>
					<HeaderButton
						name="menu"
						onPress={() => {
							navigation.openDrawer();
						}}
					/>
				</View>
				<View>
					<Text style={tailwind("text-left text-white text-2xl pt-1")}>
						{localeSelect(language, title)}
					</Text>
				</View>
			</View>
			<ButtonContainer style={tailwind("flex flex-row justify-end")}>
				{user &&
					(currentScreen === "GameNotes" ||
						currentScreen === "PlayerNotes") && (
						<View>
							<HeaderButton name="search" />
						</View>
					)}
			</ButtonContainer>
		</View>
	);
}
