import { Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { useStyles } from "../../config/unistyles";

import { stylesheet } from "./styles";

type ButtonProps = RectButtonProps & {
  title: string;
  variant?: 'base' | 'outline';
}

export function Button({ title, variant = 'base', ...othersProps }: ButtonProps) {
  const { styles, theme: { components } } = useStyles(stylesheet);

  return ( 
    <RectButton 
      style={[styles.container, components.button[variant]]} 
      {...othersProps}
    >
      <Text style={[styles.text, components.buttonText[variant]]}>
        {title}
      </Text>
    </RectButton>
  )
}
