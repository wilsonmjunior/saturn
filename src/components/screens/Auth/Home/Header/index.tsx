import { View } from "react-native";
import { useRouter } from "expo-router";

import { Button } from "@/components/common";
import { useStyles } from "@/config/unistyles";

import { stylesheet } from "./styles";

export function Header() {
  const { styles } = useStyles(stylesheet);

  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'blue', width: 48, height: 48, borderRadius: 24 }} />

      <Button 
        title="Login" 
        onPress={() => {
          router.push('/sign-in');
        }}
        paddingHorizontal={32}
        paddingVertical={10}
      />
    </View>
  );
}
