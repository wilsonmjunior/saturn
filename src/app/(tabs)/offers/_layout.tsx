import { Stack } from 'expo-router'

export default function OffersLayout () {
  return (
    <Stack initialRouteName='index' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="details" />
    </Stack>
  )
};
