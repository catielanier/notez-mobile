import { MD3DarkTheme } from 'react-native-paper';

export const neonColorsDark = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,

    // MUI equivalents
    primary: '#ff00cc',       // Hot pink
    onPrimary: '#ffffff',

    secondary: '#00ff99',     // Electric green
    onSecondary: '#000000',

    error: '#ff3300',         // Intense orange-red
    onError: '#ffffff',

    background: '#141414',    // Dark gray background (MUI "default")
    surface: '#000000',       // Black paper
    onSurface: '#ffffff',

    surfaceVariant: '#ffcc00', // Map warning to surfaceVariant
    outline: '#808080',        // Disabled gray

    // Custom extras (use in custom styles)
    info: '#3399ff',
    success: '#00ffcc',
    warning: '#ffcc00',

    onSurfaceVariant: '#c0c0c0',
  },
};
