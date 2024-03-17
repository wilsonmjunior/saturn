import { Ionicons } from "@expo/vector-icons";
import { Portal } from "@gorhom/portal";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

export function HistoryCard() {
  const [openAction, setOpenAction] = useState(false);
  const [actionPosition, setActionPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const actionViewRef = useRef(null) as React.RefObject<TouchableOpacity>;

  const handleOpen = () => {
    setOpenAction((oldState) => !oldState);
    if (actionViewRef.current) {
      actionViewRef.current.measureInWindow((x, y, width, height) => {
        setActionPosition({ x, y, width, height });
      });
    }
  };

  const handleNavigate = () => {
    setOpenAction(false);
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

        <TouchableOpacity
          ref={actionViewRef}
          style={{ marginLeft: 16, position: "relative" }}
          onPress={handleOpen}
        >
          <Ionicons name="ellipsis-vertical" size={24} />

          {openAction && (
            <Portal>
              <View
                style={{
                  minWidth: 150,
                  padding: 8,
                  backgroundColor: "#ffffff",
                  borderWidth: 1,
                  borderColor: "#cecece",
                  borderRadius: 12,
                  position: "absolute",
                  top: actionPosition.y + actionPosition.height,
                  right: 8,
                }}
              >
                <Pressable
                  style={{ padding: 6 }}
                  onPress={() => console.warn("item 1")}
                >
                  <Text>Item 1</Text>
                </Pressable>
                <Pressable style={{ padding: 6 }}>
                  <Text>Item 2</Text>
                </Pressable>
              </View>
            </Portal>
          )}
        </TouchableOpacity>
      </View>
    </Pressable>
  );
}
