import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { stylesheet } from "./styles";

import { Button, Header, Input } from "@/components/common";
import { useStyles } from "@/config/unistyles";
import { useSession } from "@/hooks";

export function SignIn() {
  const router = useRouter();

  const { styles } = useStyles(stylesheet);

  const { signIn } = useSession();

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />

        <View style={styles.forgotPassword}>
          <Text
            style={styles.forgotPasswordText}
            onPress={() => router.replace("/forgot-password")}
          >
            Esqueceu sua senha
          </Text>
        </View>
      </View>

      <View style={styles.buttonsWrapper}>
        <Button
          title="Entrar"
          onPress={() => {
            signIn();
            router.replace("/");
          }}
        />
      </View>
    </View>
  );
}
