import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

import { useStyles } from "@/config/unistyles";

import { stylesheet } from "./styles";

type HeaderProps = {
  title?: string;
  back?: boolean;
  children?: React.ReactNode; 
};

export function BgHeader({ children, title, back = true }: HeaderProps) {
  const router = useRouter(); 

  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        { back ? ( 
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="arrow-left" size={24} color={theme.colors?.white} />
          </TouchableOpacity>
        ) : null }

        { title ? ( 
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{title}</Text>
          </View>
        ) : null }
      </View>

      {children}
    </View>
  )
}
