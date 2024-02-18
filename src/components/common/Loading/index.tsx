import { ActivityIndicator, View } from "react-native";

import { useStyles } from "@/config/unistyles";

export function Loading() {
  const { theme } = useStyles();

  return (
    <View>
      <ActivityIndicator size="large" color={theme.colors?.primary} animating />
    </View>
  );
}
