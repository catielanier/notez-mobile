import { AsyncStorage } from "react-native";

export const setToken = (token) => {
  AsyncStorage.setItem("notezToken", token);
};

export const getToken = () => {
  return AsyncStorage.getItem("notezToken");
};

export const removeToken = () => {
  AsyncStorage.removeItem("notezToken");
};
