import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { getColor } from "../lib/tailwind";

export default function HeaderButton({ name, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<Icon name={name} color={getColor("white")} size={36} />
		</TouchableOpacity>
	);
}
