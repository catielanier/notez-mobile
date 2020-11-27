import React, { useContext } from "react";
import { DrawerContentScrollView, Text } from "react-native";
import { MenuContext } from "../contexts/MenuContext";

export default function SearchDrawer(props) {
	const { type } = props;
	console.log(type);
	return (
		<DrawerContentScrollView>
			<Text>{type} Search</Text>
		</DrawerContentScrollView>
	);
}
