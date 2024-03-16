import { useRouter } from "expo-router";
import { Platform, View } from "react-native";

import { stylesheet } from "./styles";

import { Button } from "@/components/common";
import { theme, useStyles } from "@/config/unistyles";

export function Home() {
  const router = useRouter();

  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={{ height: 180, backgroundColor: "#cecece" }} />

      <View style={{ marginHorizontal: 16, gap: 16, marginTop: 32 }}>
        <Button
          icon={{
            color: theme.colors.error,
            name: "home",
            position: "left",
          }}
          title="Sign in with Google"
          variant="outline"
        />

        {Platform.OS === "ios" ? (
          <Button title="Sign in with Apple" variant="outline" />
        ) : null}
      </View>
    </View>
  );
}
