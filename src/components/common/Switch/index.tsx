import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { stylesheet } from "./styles";

import { useStyles } from "@/config/unistyles";

type SwitchItemProps = {
  active: boolean;
  title: string;
  style: any;
  onPress(): void;
};

export function SwitchItem({ title, style, active, onPress }: SwitchItemProps) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: active ? theme.colors?.secondary : theme.colors?.white,
        ...style,
      }}
    >
      <RectButton style={styles.button} onPress={onPress}>
        <Text
          style={{
            color: active ? theme.colors?.white : theme.colors?.black,
          }}
        >
          {title}
        </Text>
      </RectButton>
    </View>
  );
}

type SwitchProps = {
  active: string;
  onToggle(value: string): void;
};

export function Switch({ active, onToggle }: SwitchProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <SwitchItem
        active={active === "1"}
        title="Para mim"
        onPress={() => onToggle("1")}
        style={{
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
        }}
      />
      <SwitchItem
        active={active === "2"}
        title="Para seu negócio"
        onPress={() => onToggle("2")}
        style={{
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
        }}
      />
    </View>
  );
}
