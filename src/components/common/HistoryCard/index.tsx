import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, Pressable } from "react-native";

import { ActionMenu } from "./ActionMenu";

type HistoryCardProps = {
  id: number;
  isOpenActionMenu: boolean;
  actionItems: string[];
  onOpenMenu(value?: number): void;
};

export function HistoryCard({
  id,
  isOpenActionMenu,
  onOpenMenu,
  actionItems,
}: HistoryCardProps) {
  const handleNavigate = () => {
    onOpenMenu(undefined);
    router.push("/(tabs)/offers/details");
  };

  return (
    <Pressable
      style={{
        height: 100,
        borderWidth: 1,
        borderColor: "#cecece",
        backgroundColor: "#fff",
        borderRadius: 16,
      }}
      onPress={handleNavigate}
    >
      <View
        style={{
          paddingHorizontal: 16,
          flexDirection: "row",
          height: 100,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 42,
            height: 42,
            borderRadius: 21,
            backgroundColor: "#cecece",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="flash-off-outline" size={24} />
        </View>

        <View
          style={{
            flex: 1,
            marginLeft: 16,
            gap: 8,
          }}
        >
          <Text style={{ fontWeight: "600" }}>Wilson Junior</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "400", color: "#a8a8a8" }}>Venda</Text>
            <Text style={{ fontWeight: "400" }}>R$ 1200</Text>
          </View>
        </View>

        <ActionMenu
          id={id}
          isOpen={isOpenActionMenu}
          items={actionItems}
          onOpen={onOpenMenu}
        />
      </View>
    </Pressable>
  );
}
