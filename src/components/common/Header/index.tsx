import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { useStyles } from "@/config/unistyles";

import { stylesheet } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

type HeaderProps = {
  children?: React.ReactNode;
  title?: string;
  back?: boolean;
};

export function Header({ children, title, back = true }: HeaderProps) {
  const router = useRouter(); 

  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      {!children || back ? ( 
        <View style={styles.content}>
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="arrow-left" size={24} color={theme.colors?.white} />
          </TouchableOpacity>

          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      ) : null}

      {children}
    </View>
  )
}
