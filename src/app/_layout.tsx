import { UnistylesTheme } from "react-native-unistyles";
import { Slot } from "expo-router";

import { theme } from "@/config/unistyles";
import { SessionProvider } from "@/contexts";

export default function Root() {
  return (
    <SessionProvider>
      <UnistylesTheme theme={theme}>
        <Slot />
      </UnistylesTheme>
    </SessionProvider>
  );
}
