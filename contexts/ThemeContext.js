import React, { useState, createContext } from "react";
import { Platform } from "react-native";
import { AsyncStorage } from "react-native";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
	const [darkMode, setDarkMode] = useState(
		AsyncStorage.getItem("darkMode") || false
	);
	const changeTheme = () => {
		setDarkMode(!darkMode);
		AsyncStorage.setItem("darkMode", darkMode);
	};
	const platform = Platform.OS;

	return (
		<ThemeContext.Provider value={{ darkMode, changeTheme, platform }}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
