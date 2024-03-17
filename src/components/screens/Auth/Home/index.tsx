import { router, useRouter } from "expo-router";
import { Platform, View } from "react-native";

import { stylesheet } from "./styles";

import { Button } from "@/components/common";
import { theme, useStyles } from "@/config/unistyles";
import { useSession } from "@/hooks";

export function Home() {
  const { styles } = useStyles(stylesheet);

  const { signIn } = useSession();

  return (
    <View style={styles.container}>
      <View style={{ height: 180, backgroundColor: "#cecece" }} />

      <View
        style={{
          width: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "100%", paddingHorizontal: 16, gap: 16 }}>
          <Button
            icon={{
              color: theme.colors.error,
              name: "google",
              position: "left",
            }}
            title="Sign in with Google"
            variant="outline"
            onPress={signIn}
          />

          {Platform.OS === "ios" ? (
            <Button
              icon={{
                color: theme.colors.error,
                name: "apple",
                position: "left",
              }}
              title="Sign in with Apple"
              variant="outline"
            />
          ) : null}
        </View>
      </View>
    </View>
  );
}
