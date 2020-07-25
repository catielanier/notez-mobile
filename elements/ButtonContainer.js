import React from "react";
import { View } from "react-native";
import { tailwind } from "../lib/tailwind";

export default function ButtonContainer({ children }) {
	return <View style={tailwind("flex flex-row justify-end")}>{children}</View>;
}
