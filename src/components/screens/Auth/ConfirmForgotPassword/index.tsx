import { View } from "react-native";

import { Header } from "@/components/common";
import { useStyles } from "@/config/unistyles";

import { stylesheet } from "./styles";

export function ConfirmForgotPassword() {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}
