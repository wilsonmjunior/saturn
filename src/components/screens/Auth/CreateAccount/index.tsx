import { View } from "react-native";

import { Header, Input } from "@/components/common";
import { useStyles } from "@/config/unistyles";

import { stylesheet } from "./styles";

export function CreateAccount() {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Header title="Cadastro" />
      
      <View style={styles.content}>
        <Input placeholder="Nome" />
        <Input placeholder="E-mail" />
        <Input placeholder="Celular" />
        <Input placeholder="Senha" secureTextEntry />
      </View>
    </View>
  )
}
