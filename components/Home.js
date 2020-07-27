import React from "react";
import { Text } from "react-native";
import PaddedView from "../elements/PaddedView";
import ButtonContainer from "../elements/ButtonContainer";
import SecondaryButton from "../elements/SecondaryButton";
import TextOnlyButton from "../elements/TextOnlyButton";
import { tailwind } from "../lib/tailwind";
export default function Home({ navigation }) {
	return (
		<PaddedView style={tailwind("flex items-center justify-center")}>
			<Text>Home</Text>
		</PaddedView>
	);
}
