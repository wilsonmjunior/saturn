import { Ionicons } from "@expo/vector-icons";
import { Portal } from "@gorhom/portal";
import { useState, useRef } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

type MenuProps = {
  id: number;
  isOpen: boolean;
  items: string[];
  onOpen(value?: number): void;
};

export function ActionMenu({ id, isOpen, items, onOpen }: MenuProps) {
  const [actionPosition, setActionPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const actionMenuRef = useRef(null) as React.RefObject<TouchableOpacity>;

  const handleOpenMenu = () => {
    onOpen(id);

    if (actionMenuRef?.current) {
      actionMenuRef.current.measureInWindow((x, y, width, height) => {
        setActionPosition({ x, y, width, height });
      });
    }
  };

  return (
    <TouchableOpacity
      ref={actionMenuRef}
      style={{ marginLeft: 16, position: "relative" }}
      onPress={handleOpenMenu}
    >
      <Ionicons name="ellipsis-vertical" size={24} />

      {isOpen ? (
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
            {items.map((item) => (
              <Pressable
                style={{ padding: 6 }}
                onPress={() => console.warn(item)}
              >
                <Text>{item}</Text>
              </Pressable>
            ))}
          </View>
        </Portal>
      ) : null}
    </TouchableOpacity>
  );
}
