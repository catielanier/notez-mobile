import React from "react";
import { View, Text } from "react-native";
import { tailwind } from "../lib/tailwind";
export default function Home() {
	return (
		<View style={tailwind("flex items-center justify-center")}>
			<Text>Home</Text>
		</View>
	);
}
