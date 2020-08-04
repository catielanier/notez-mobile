import React, { useContext } from "react";
import { View, Text } from "react-native";
import { MenuContext } from "../contexts/MenuContext";

export default function SearchDrawer(props) {
	const { type } = props;
	console.log(type);
	return (
		<View>
			<Text>{type} Search</Text>
		</View>
	);
}
