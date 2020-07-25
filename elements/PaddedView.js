import React from "react";
import { View } from "react-native";
import { tailwind } from "../lib/tailwind";

export default function PaddedView({ children }) {
	return <View style={tailwind("pt-3 px-2")}>{children}</View>;
}
