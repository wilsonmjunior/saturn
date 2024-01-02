import { forwardRef } from "react";
import { Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { useStyles } from "@/config/unistyles";

import { stylesheet } from "./styles";

type ButtonProps = RectButtonProps & {
  title: string;
  variant?: 'base' | 'outline';
}

export const Button = forwardRef(({ title, variant = 'base', ...othersProps }: ButtonProps, ref?: any) => {
    const { styles, theme: { components } } = useStyles(stylesheet);
  
    return ( 
      <RectButton 
        style={[styles.container, components.button[variant]]} 
        ref={ref}
        {...othersProps}
      >
        <Text style={[styles.text, components.buttonText[variant]]}>
          {title}
        </Text>
      </RectButton>
    )
  }
);