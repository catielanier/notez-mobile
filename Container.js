import "react-native-gesture-handler";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "./components/Header";
import Home from "./components/Home";
import { UserContext } from "./contexts/UserContext";
import Login from "./components/Login";
import Signup from "./components/Signup";
import GameNotes from "./components/GameNotes";

const Stack = createStackNavigator();

export default function ComponentContainer() {
	const { user } = useContext(UserContext);
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={!user ? "Home" : "GameNotes"}
				screenOptions={{ header: Header }}
			>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Signup" component={Signup} />
				<Stack.Screen name="GameNotes" component={GameNotes} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
