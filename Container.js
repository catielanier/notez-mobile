import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Header from "./components/Header";
import NavigationDrawer from "./components/NavigationDrawer";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import GameNotes from "./components/GameNotes";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function StackNavigator() {
	return (
		<Stack.Navigator initialRouteName="Main" screenOptions={{ header: Header }}>
			<Stack.Screen name="Main" component={Home} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Signup" component={Signup} />
			<Stack.Screen name="GameNotes" component={GameNotes} />
		</Stack.Navigator>
	);
}

export default function ComponentContainer() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName="Stack"
				drawerContent={(props) => <NavigationDrawer {...props} />}
			>
				<Drawer.Screen name="Stack" component={StackNavigator} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
