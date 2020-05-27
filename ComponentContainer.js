import "react-native-gesture-handler";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import GameNotes from "./components/GameNotes";
import Signup from "./components/Signup";

// Contexts
import { UserContext } from "./contexts/UserContext";
import MenuContextProvider from "./contexts/MenuContext";
import GameContextProvider from "./contexts/GameContext";
import CharacterContextProvider from "./contexts/CharacterContext";

const Stack = createStackNavigator();

export default function ComponentContainer() {
  const { user } = useContext(UserContext);
  return (
    <MenuContextProvider>
      <GameContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ header: Header }}
          >
            {user ? (
              <Stack.Screen name="Home" component={GameNotes} />
            ) : (
              <Stack.Screen name="Home" component={Home} />
            )}

            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <CharacterContextProvider></CharacterContextProvider>
          </Stack.Navigator>
        </NavigationContainer>
      </GameContextProvider>
    </MenuContextProvider>
  );
}
