import { TextInput, TextInputProps } from "react-native";

import { stylesheet } from "./styles";

import { useStyles } from "@/config/unistyles";

export type InputProps = TextInputProps;

export function Input({ ...props }: InputProps) {
  const { styles } = useStyles(stylesheet);

  return <TextInput {...props} style={[styles.input, props.style]} />;
}
