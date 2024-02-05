import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

import { useStyles } from "@/config/unistyles";

import { stylesheet } from "./styles";

export function Header() {
  const router = useRouter(); 

  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="chevron-left" size={24} color={theme.colors?.black} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
