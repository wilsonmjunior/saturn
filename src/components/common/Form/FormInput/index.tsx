import { useMemo } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { Text } from "react-native";

import { Input, InputProps } from "../../Input";
import { FormField } from "../Form";

import { stylesheet } from "./styles";

import { useStyles } from "@/config/unistyles";

type FormInputProps = InputProps &
  UseControllerProps & {
    control: Control;
    errors?: FieldErrors<FieldValues>;
    field: FormField;
  };

export function FormInput({ control, errors, field }: FormInputProps) {
  const { styles, theme } = useStyles(stylesheet);

  const message = useMemo(
    () => (errors ? errors[field.name]?.message : ""),
    [errors, field.name],
  );

  return (
    <>
      <Controller
        control={control}
        name={field.name}
        rules={field.rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            {...field.common}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={{
              borderWidth: 1,
              borderColor:
                errors && errors[field.name]
                  ? theme.colors?.error
                  : theme.colors?.border,
            }}
          />
        )}
      />

      {message ? (
        <Text style={styles.errorText}>{message.toString()}</Text>
      ) : null}
    </>
  );
}
