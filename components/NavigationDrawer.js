import React, { useContext } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { UserContext } from "../contexts/UserContext";
import { LanguageContext } from "../contexts/LanguageContext";
import localeSelect from "../services/localeSelect";
import { login } from "../data/locales";

export default function NavigationDrawer({ navigation }) {
	const { user } = useContext(UserContext);
	const { language } = useContext(LanguageContext);
	console.log("asl bb");
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
				</>
			)}
		</DrawerContentScrollView>
	);
}
