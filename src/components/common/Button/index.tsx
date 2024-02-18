import { forwardRef } from "react";
import { Text } from "react-native";
import { RectButton, type RectButtonProps } from "react-native-gesture-handler";

import { Icon, IconType } from "../Icon";

import { stylesheet } from "./styles";

import { useStyles } from "@/config/unistyles";

type ButtonProps = RectButtonProps & {
  title: string;
  icon?: string;
  iconType?: IconType;
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
      iconType,
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
        <Text style={[styles.text, components?.buttonText[variant]]}>
          {title}
        </Text>

        {icon ? <Icon name={icon} type={iconType} /> : null}
      </RectButton>
    );
  },
);
