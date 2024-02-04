import { TextInput, TextInputProps } from "react-native";

import { useStyles } from "@/config/unistyles";

import { stylesheet } from "./styles";

export type InputProps = TextInputProps;

export function Input({ ...props }: InputProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <TextInput
      style={styles.input}
      {...props}
    />
  );
}