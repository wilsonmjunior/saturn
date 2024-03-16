import { FontAwesome } from "@expo/vector-icons";
import { forwardRef } from "react";
import { Text } from "react-native";
import { RectButton, type RectButtonProps } from "react-native-gesture-handler";

import { stylesheet } from "./styles";

import { useStyles } from "@/config/unistyles";

type ButtonProps = RectButtonProps & {
  title: string;
  icon?: {
    name: keyof typeof FontAwesome.glyphMap;
    color: string;
    position: "right" | "left";
  };
  variant?: "base" | "outline";
  paddingHorizontal?: number;
  paddingVertical?: number;
  height?: number;
};

export const Button = forwardRef(
  (
    {
      title,
      variant = "base",
      icon,
      height,
      paddingHorizontal,
      paddingVertical,
      ...othersProps
    }: ButtonProps,
    ref?: any,
  ) => {
    const {
      styles,
      theme: { components },
    } = useStyles(stylesheet);

    return (
      <RectButton
        style={[
          styles.container,
          components?.button[variant],
          icon ? styles.iconAlign : null,
          {
            height,
            paddingHorizontal,
            paddingVertical,
          },
        ]}
        ref={ref}
        {...othersProps}
      >
        {icon && icon.position === "left" ? (
          <FontAwesome name={icon.name} size={24} color={icon.color} />
        ) : null}

        <Text style={[styles.text, components?.buttonText[variant]]}>
          {title}
        </Text>

        {icon && icon.position === "right" ? (
          <FontAwesome name={icon.name} size={24} color={icon.color} />
        ) : null}
      </RectButton>
    );
  },
);
