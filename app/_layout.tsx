import { DarkTheme   as NavigationDarkTheme,
         DefaultTheme as NavigationLightTheme,
         ThemeProvider }   from '@react-navigation/native';
import { PaperProvider }                      from 'react-native-paper';
import { Stack }                              from 'expo-router';
import { StatusBar }                          from 'expo-status-bar';
import { useFonts }                           from 'expo-font';
import 'react-native-reanimated';

import { useAppTheme }       from '@/themes';           // calls useColorScheme under the hood
import { useColorScheme }    from '@/hooks/useColorScheme';

export default function RootLayout() {
  // ← All hooks run unconditionally on every render
  const colorScheme = useColorScheme();
  const paperTheme   = useAppTheme();
  const [loaded]     = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // ← Early return AFTER hooks
  if (!loaded) {
    return null;
  }

  // ← Now your hook order never changes
  const navTheme = colorScheme === 'dark'
    ? NavigationDarkTheme
    : NavigationLightTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <ThemeProvider value={navTheme}>
        <Stack>
          <Stack.Screen name="(tabs)"      options={{ headerShown: false }} />
          <Stack.Screen name="+not-found"  />
        </Stack>
        <StatusBar style={paperTheme.dark ? 'light' : 'dark'} />
      </ThemeProvider>
    </PaperProvider>
  );
}
