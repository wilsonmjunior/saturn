import { useStyles } from "@/config/unistyles";
import { ActivityIndicator, View } from "react-native";

export function Loading() {
  const { theme } = useStyles();

  return (
    <View>
      <ActivityIndicator
        size="large"
        color={theme.colors?.primary}
        animating
      />
    </View>
  )
}
