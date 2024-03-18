import { Foundation, Feather } from "@expo/vector-icons";
import { View, Pressable, Text } from "react-native";

import { theme } from "@/config/unistyles";

export function Document() {
  return (
    <View
      style={{
        height: 300,
        backgroundColor: theme.colors.white,
        marginHorizontal: 16,
        borderRadius: 12,
        borderTopWidth: 4,
        borderTopColor: theme.colors.black,
        padding: 16,
        gap: 32,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "600" }}>
        Contrato da primeira negociação
      </Text>

      <View
        style={{
          padding: 16,
          borderRadius: 8,
          backgroundColor: "#f3f3f3",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Foundation name="page-doc" size={32} color="#0047ec" />
        <View style={{ marginLeft: 16, gap: 4 }}>
          <Text style={{ fontWeight: "500" }}>primeira-negociação.docx</Text>
          <Text style={{ fontSize: 12, color: "#7b7b7b" }}>
            04/03/2024 | 2.3mb
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#00870060",
          }}
        >
          <Feather name="check" size={20} color="#008700" />
        </View>

        <Pressable
          style={{
            width: 180,
            borderWidth: 1,
            borderRadius: 25,
            paddingHorizontal: 24,
            paddingVertical: 16,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 8,
          }}
        >
          <Feather name="refresh-cw" size={16} />
          <Text>Substituir arquivo</Text>
        </Pressable>
      </View>
    </View>
  );
}
