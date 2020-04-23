import "react-native-gesture-handler";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import GameNotes from "./components/GameNotes";
import { UserContext } from "./contexts/UserContext";

const Stack = createStackNavigator();

export default function ComponentContainer() {
  const { user } = useContext(UserContext);
  return (
    <View>
      <NavigationContainer>
        <Header />
        <Stack.Navigator initialRouteName="Home">
          {user ? (
            <Stack.Screen name="Home" component={GameNotes} />
          ) : (
            <Stack.Screen name="Home" component={Home} />
          )}

          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
