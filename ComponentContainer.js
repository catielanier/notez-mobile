import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

const Stack = createStackNavigator();

export default function ComponentContainer() {
  return (
    <View>
      <Header />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
