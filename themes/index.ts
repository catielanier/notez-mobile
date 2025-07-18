import { useColorScheme } from "react-native";
import { neonColorsLight } from "./neonColorsLight";
import { neonColorsDark } from "./neonColorsDark";

export const useAppTheme = () => {
    const scheme = useColorScheme();
    return scheme === 'dark' ? neonColorsDark : neonColorsLight;
}