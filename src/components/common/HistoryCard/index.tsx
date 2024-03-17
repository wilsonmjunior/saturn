import { Ionicons } from "@expo/vector-icons";
import { Portal } from "@gorhom/portal";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { View, Text, Pressable } from "react-native";

export function HistoryCard() {
  const [open, setOpen] = useState(false);
  const actionViewRef = useRef(null) as React.RefObject<View>;
  const [actionPosition, setActionPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const handleOpen = () => {
    setOpen(!open);
    if (actionViewRef.current) {
      actionViewRef.current.measureInWindow((x, y, width, height) => {
        setActionPosition({ x, y, width, height });
      });
    }
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
      onPress={() => router.push("/(tabs)/offers/details")}
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
            width: actionPosition.width,
            top: actionPosition.y + actionPosition.height,
            left: actionPosition.x,
          }}
        >
          <Text style={{ fontWeight: "600" }}>Wilson Junior</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "400" }}>Venda</Text>
            <Text style={{ fontWeight: "400" }}>R$ 1200</Text>
          </View>
        </View>

        <View
          ref={actionViewRef}
          style={{ marginLeft: 16, position: "relative" }}
        >
          <Ionicons name="ellipsis-vertical" size={24} onPress={handleOpen} />

          {open && (
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
                  right: 0,
                  marginTop: 28,
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
        </View>
      </View>
    </Pressable>
  );
}
