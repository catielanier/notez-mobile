import React from "react";
import { Text } from "react-native";
import PaddedView from "../elements/PaddedView";
import SecondaryButton from "../elements/SecondaryButton";
import { tailwind } from "../lib/tailwind";
export default function Home({ navigation }) {
	return (
		<PaddedView style={tailwind("flex items-center justify-center")}>
			<Text>Home</Text>
			<SecondaryButton
				text="Login"
				onPress={() => {
					navigation.navigate("Login");
				}}
			/>
		</PaddedView>
	);
}
