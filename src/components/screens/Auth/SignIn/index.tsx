import { View } from "react-native";
import { useRouter } from "expo-router";

import { Button } from "@/components/Button";
import { Header, Input } from "@/components/common";
import { useStyles } from "@/config/unistyles";
import { useSession } from "@/hooks";

import { stylesheet } from "./styles";

export function SignIn() {
  const router = useRouter();

  const { styles } = useStyles(stylesheet);

  const { signIn } = useSession();

  return (
    <View style={styles.container}>
      <Header title="Login" />

      <View style={styles.content}>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
      </View>

      <View style={styles.buttonsWrapper}>
        <Button 
          title="Entrar"
          onPress={() => {
            signIn();
            router.replace('/');
          }}
        />
      </View>
    </View>
  )
}
