import { Text, View } from "react-native";
import { useNavigation } from "expo-router";

import { Button, Input } from "@/components/common";
import { useStyles } from "@/config/unistyles";

import { stylesheet } from "./styles";

export function CreatePassword() {
  const navigation = useNavigation();

  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Crie uma nova senha
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <Input placeholder="Digite a sua senha" />
          <Input placeholder="Confirme sua senha" />
        </View>

        <View style={styles.buttonsWrapper}>
          <Button
            title='Alterar senha' 
            onPress={() => {}}
          />
          <Button
            title='Cancelar' 
            onPress={() => navigation.goBack()}
            variant="outline"
          />
        </View>
      </View>
    </View>
  )
}
