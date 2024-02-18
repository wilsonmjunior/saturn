import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { PortalProvider } from "@gorhom/portal";
import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { UnistylesTheme } from "react-native-unistyles";

import { theme } from "@/config/unistyles";
import { SessionProvider } from "@/contexts";

SplashScreen.preventAutoHideAsync();

export default function Root() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <SessionProvider>
        <UnistylesTheme theme={theme}>
          <PortalProvider>
            <Slot />
          </PortalProvider>
        </UnistylesTheme>
      </SessionProvider>
    </GestureHandlerRootView>
  );
}
