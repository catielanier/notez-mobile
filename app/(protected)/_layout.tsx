// app/(protected)/_layout.tsx
import React from 'react';
import { Stack } from 'expo-router';

export default function ProtectedLayout() {
  return (
    <Stack>
      {/* 1) Your tab navigator as the base screen */}
      <Stack.Screen
        name="tabs"
        options={{ headerShown: false }}
      />

      {/* 2) Each of these is a modal */}
      <Stack.Screen
        name="user-settings"
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
