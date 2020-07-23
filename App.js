import React from "react";
import { StatusBar } from "react-native";
import Container from "./Container";
import UserContextProvider from "./contexts/UserContext";
import LanguageContextProvider from "./contexts/LanguageContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import GameContextProvider from "./contexts/GameContext";
import { getColor } from "./lib/tailwind";

export default function App() {
	return (
		<LanguageContextProvider>
			<UserContextProvider>
				<ThemeContextProvider>
					<GameContextProvider>
						<StatusBar
							backgroundColor={getColor("blue-500")}
							barStyle="light-content"
						/>
						<Container />
					</GameContextProvider>
				</ThemeContextProvider>
			</UserContextProvider>
		</LanguageContextProvider>
	);
}
