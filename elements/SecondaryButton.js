import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { tailwind } from "../lib/tailwind";

export default function PrimaryButton({ text, onPress }) {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={tailwind("px-1 py-2 border border-orange-400 rounded")}
		>
			<Text
				style={tailwind("text-orange-400 font-semibold uppercase text-base")}
			>
				{text}
			</Text>
		</TouchableOpacity>
	);
}
