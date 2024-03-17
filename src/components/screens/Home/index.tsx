import { View, Text } from "react-native";

import { stylesheet } from "./styles";

import { useStyles } from "@/config/unistyles";

export function Home() {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}
