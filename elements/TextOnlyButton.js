import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { tailwind } from "../lib/tailwind";

export default function TextOnlyButton({ text, onPress }) {
	return (
		<TouchableOpacity onPress={onPress} style={tailwind("px-1 py-2")}>
			<Text style={tailwind("font-semibold uppercase text-base")}>{text}</Text>
		</TouchableOpacity>
	);
}

