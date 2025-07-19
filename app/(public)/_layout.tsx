// app/(public)/_layout.tsx
import { Stack } from "expo-router";

export default function PublicLayout() {
  return (
    <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Welcome" }} />
      <Stack.Screen name="login" options={{ title: "Log In" }} />
      <Stack.Screen name="signup" options={{ title: "Sign Up" }} />
      <Stack.Screen
        name="forgot"
        options={{
          presentation: "modal",
          animation: "slide_from_bottom",
          title: "Forgot Password",
        }}
      />
      <Stack.Screen
        name="forgot/[key]"
        options={{
          presentation: "modal",
          animation: "slide_from_bottom",
          title: "Reset Password",
        }}
      />
      <Stack.Screen
        name="verify/[key]"
        options={{
          presentation: "modal",
          animation: "slide_from_bottom",
          title: "Verify Email",
        }}
      />
    </Stack>
  );
}
