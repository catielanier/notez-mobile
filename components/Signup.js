import React, { useContext } from "react";
import { View, Text } from "react-native";
import PaddedView from "../elements/PaddedView";
import { tailwind, getColor } from "../lib/tailwind";
import countries from "../data/countries";
import { UserContext } from "../contexts/UserContext";
import localeSelect from "../services/localeSelect";
import { LanguageContext } from "../contexts/LanguageContext";
import { signup } from "../data/locales";

export default function Signup() {
	const { loading, error, success, signup: doSignup } = useContext(UserContext);
	const { language } = useContext(LanguageContext);
	return (
		<PaddedView>
			<Text style={tailwind("text-lg text-center")}>
				{localeSelect(language, signup)}
			</Text>
		</PaddedView>
	);
}
