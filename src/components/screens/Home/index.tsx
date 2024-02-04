import { useState } from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import { Sheet } from "@/components/Sheet";
import { useStyles } from "@/config/unistyles";
import { useSession } from "@/hooks";

import { stylesheet } from "./styles";

export function Home() {
  const [openSheet, setOpenSheet] = useState(false)

  const { signOut } = useSession()

  const { styles, theme } = useStyles(stylesheet)

  function handleToggleSheet () {
    setOpenSheet(!openSheet)
  }
  
  return (
    <View style={styles.container}>
      <RectButton
        onPress={handleToggleSheet}
        style={styles.button}
      >
        <Ionicons
          name="options"
          color={theme.colors?.white}
          size={24}
        />
      </RectButton>

      <Text
        onPress={() => {
          signOut();
        }}
      >
        Sign Out
      </Text>

      { openSheet ? <Sheet onClose={handleToggleSheet} /> : null}
    </View>
  )
}