import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { stylesheet } from "./styles";

import { useStyles } from "@/config/unistyles";

export function Header() {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Feather name="chevron-left" size={24} color={theme.colors?.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
