import React, { useContext } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { UserContext } from "../contexts/UserContext";
import { LanguageContext } from "../contexts/LanguageContext";
import localeSelect from "../services/localeSelect";
import { login, signup, logout, gameNotes, playerNotes } from "../data/locales";

export default function NavigationDrawer({ navigation }) {
	const { user, logout: doLogout } = useContext(UserContext);
	const { language } = useContext(LanguageContext);
	return (
		<DrawerContentScrollView>
			{!user && (
				<>
					<DrawerItem
						label={localeSelect(language, login)}
						onPress={() => {
							navigation.navigate("Stack", { screen: "Login" });
						}}
					/>
					<DrawerItem
						label={localeSelect(language, signup)}
						onPress={() => {
							navigation.navigate("Stack", { screen: "Signup" });
						}}
					/>
				</>
			)}
			{user && (
				<>
					<DrawerItem
						label={localeSelect(language, gameNotes)}
						onPress={() => {
							navigation.navigate("Stack", { screen: "GameNotes" });
						}}
					/>
					<DrawerItem
						label={localeSelect(language, playerNotes)}
						onPress={() => {
							navigation.navigate("Stack", { screen: "PlayerNotes" });
						}}
					/>
					<DrawerItem
						label={localeSelect(language, logout)}
						onPress={() => {
							doLogout();
						}}
					/>
				</>
			)}
		</DrawerContentScrollView>
	);
}
