import { MD3LightTheme } from 'react-native-paper';

export const neonColorsLight = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,

    // MUI palette
    primary: '#ff0066',        // Neon pink
    onPrimary: '#ffffff',

    secondary: '#00ff99',      // Electric green
    onSecondary: '#000000',

    error: '#ff3300',          // Intense orange-red
    onError: '#ffffff',

    warning: '#ff9900',        // Vibrant orange-yellow (no native slot — see "surfaceVariant" note below)
    success: '#00ffcc',        // Turquoise (no native slot — used manually)

    background: '#f0f0f0',     // Light gray background
    surface: '#ffffff',        // "paper"
    onSurface: '#000000',

    surfaceVariant: '#ff9900', // Use warning here if you want a vibrant accent surface

    outline: '#888888',

    // Text colors (manually applied if needed)
    // react-native-paper doesn't support text.primary/secondary out of the box
    // You'll use these in your components via custom styles or overrides
    textPrimary: '#000000',
    textSecondary: '#555555',
    textDisabled: '#888888',
  },
};
