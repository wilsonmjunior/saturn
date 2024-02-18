import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { stylesheet } from "./styles";

import { Sheet } from "@/components/Sheet";
import { useStyles } from "@/config/unistyles";

export function Home() {
  const [openSheet, setOpenSheet] = useState(false);

  const { styles, theme } = useStyles(stylesheet);

  function handleToggleSheet() {
    setOpenSheet(!openSheet);
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={handleToggleSheet} style={styles.button}>
        <Ionicons name="options" color={theme.colors?.white} size={24} />
      </RectButton>

      {openSheet ? <Sheet onClose={handleToggleSheet} /> : null}
    </View>
  );
}
