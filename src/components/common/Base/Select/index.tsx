import { Feather } from "@expo/vector-icons";
import { Portal } from "@gorhom/portal";
import { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";

export type SelectProps = {
  selected?: string;
  placeholder?: string;
  onSelectItem(value: string): void;
};

const items = [
  { name: "Item 1" },
  { name: "Item 2" },
  { name: "Item 3" },
  { name: "Item 4" },
  { name: "Item 5" },
  { name: "Item 6" },
];

export function Select({
  selected,
  placeholder = "Selecione",
  onSelectItem,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const inputRef = useRef(null);

  function onOpen() {
    setOpen(!open);
    if (inputRef.current) {
      inputRef.current.measureInWindow((x, y, width, height) => {
        setButtonPosition({ x, y, width, height });
      });
    }
  }

  function handleSelect(value: string) {
    setOpen(false);
    onSelectItem(value);
  }

  return (
    <View>
      <View ref={inputRef}>
        <RectButton style={styles.button} onPress={onOpen}>
          <Text>{selected || placeholder}</Text>
          <Feather name="chevron-down" size={16} />
        </RectButton>
      </View>

      {open && (
        <Portal>
          <View
            style={[
              styles.dropdown,
              {
                width: buttonPosition.width,
                top: buttonPosition.y + buttonPosition.height,
                left: buttonPosition.x,
              },
            ]}
          >
            <FlatList
              data={items}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelect(item.name)}
                  style={styles.item}
                >
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Portal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 8,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  dropdown: {
    position: "absolute",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    maxHeight: 150, // Limita a altura da lista de opções
    overflow: "hidden", // Mantém o conteúdo dentro dos limites da lista
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
