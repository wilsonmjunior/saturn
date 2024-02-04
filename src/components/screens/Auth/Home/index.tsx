import { View } from "react-native";
import { useRouter } from "expo-router";

import { Button, Header } from "@/components/common";
import { useStyles } from "@/config/unistyles";

import { stylesheet } from "./styles";

export function Home() {
  const router = useRouter();

  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Header title="Login" back={false} />
      
      <View style={styles.buttonsWrapper}>
        <Button 
          title="Login" 
          onPress={() => {
            router.push('/sign-in');
          }}
        />
        <Button
          title="Cadastrar-se"
          variant="outline"
          onPress={() => {
            router.push('/sign-up');
          }}
        />
      </View>
    </View>
  )
}
