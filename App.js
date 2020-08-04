import React from "react";
import { StatusBar } from "react-native";
import Container from "./Container";
import UserContextProvider from "./contexts/UserContext";
import LanguageContextProvider from "./contexts/LanguageContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import MenuContextProvider from "./contexts/MenuContext";
import GameContextProvider from "./contexts/GameContext";
import NoteContextProvider from "./contexts/NoteContext";
import { getColor } from "./lib/tailwind";

export default function App() {
	return (
		<LanguageContextProvider>
			<UserContextProvider>
				<MenuContextProvider>
					<ThemeContextProvider>
						<GameContextProvider>
							<StatusBar
								backgroundColor={getColor("blue-500")}
								barStyle="light-content"
							/>
							<NoteContextProvider>
								<Container />
							</NoteContextProvider>
						</GameContextProvider>
					</ThemeContextProvider>
				</MenuContextProvider>
			</UserContextProvider>
		</LanguageContextProvider>
	);
}
