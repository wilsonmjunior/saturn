import { Text, View } from "react-native";

import { useForgotPassword } from "./forgot.hook";
import { stylesheet } from "./styles";

import { Button, Header, Input } from "@/components/common";
import { useStyles } from "@/config/unistyles";

export function ForgotPassword() {
  const { styles } = useStyles(stylesheet);

  const { handleForgotPassword, setDocument } = useForgotPassword();

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Esqueceu a senha?</Text>
          <Text style={styles.label}>Confirme seu CPF para prosseguir</Text>
        </View>

        <Input
          placeholder="Ex: 123.XXX.XXX-XX"
          onChangeText={(text) => setDocument(text)}
        />

        <View style={{ marginTop: 16 }}>
          <Button title="Avançar" onPress={handleForgotPassword} />
        </View>
      </View>
    </View>
  );
}
