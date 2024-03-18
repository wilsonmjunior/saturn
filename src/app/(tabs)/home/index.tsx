import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "@/config/unistyles";

export default function HomeScreen() {
  return (
    <View
      style={{ marginTop: getStatusBarHeight() + 24, marginHorizontal: 16 }}
    >
      <RectButton
        onPress={() => router.push("/(tabs)/home/documents")}
        style={{
          width: 172,
          height: 172,

          borderRadius: 16,
          backgroundColor: "#ffffff",

          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.17,
          shadowRadius: 3.05,
          elevation: 4,

          paddingHorizontal: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Feather name="upload" size={64} color={theme.colors.primary} />
        <Text style={{ marginTop: 16, fontSize: 16, fontWeight: "500" }}>
          Enviar Documentos
        </Text>
      </RectButton>
    </View>
  );
}
