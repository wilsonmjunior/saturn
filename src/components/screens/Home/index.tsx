import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { stylesheet } from "./styles";

import { AnimatedAutoScroll } from "@/components/common/AnimatedAutoScroll";
import { HorizontalList } from "@/components/common/HorizontalList";
import { Sheet } from "@/components/common/Sheet";
import { useStyles } from "@/config/unistyles";

export function Home() {
  const [openSheet, setOpenSheet] = useState(false);

  const { styles, theme } = useStyles(stylesheet);

  function handleToggleSheet() {
    setOpenSheet(!openSheet);
  }

  return (
    <View style={styles.container}>
      <>
        <RectButton onPress={handleToggleSheet} style={styles.button}>
          <Ionicons name="options" color={theme.colors?.white} size={24} />
        </RectButton>

        {openSheet ? <Sheet onClose={handleToggleSheet} /> : null}
      </>

      <View style={{ marginTop: 48 }}>
        <HorizontalList items={["#8400ff", "#15ff00", "#FF0000"]} />

        <AnimatedAutoScroll />
      </View>
    </View>
  );
}
