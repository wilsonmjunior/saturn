import { Image, Text, View } from "react-native";

import { stylesheet } from "./styles";

import InterrogationImage from "@/assets/interrogation.png";
import { Button, Header } from "@/components/common";
import { useStyles } from "@/config/unistyles";

export function ConfirmForgotPassword() {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Text style={styles.title}>
          Por onde quer receber o link para redefinir sua senha?
        </Text>

        <View
          style={{
            marginVertical: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={InterrogationImage}
            resizeMode="contain"
            style={{ width: 300, height: 300 }}
          />
        </View>

        <View style={{ marginTop: 16 }}>
          <Text style={{ fontWeight: "bold" }}>E-mail</Text>
        </View>

        <View style={{ marginTop: 16 }}>
          <Text style={{ fontWeight: "bold" }}>Número do celular</Text>
        </View>
      </View>

      <View style={styles.sendButtonWrapper}>
        <Button title="Enviar" />
      </View>
    </View>
  );
}
