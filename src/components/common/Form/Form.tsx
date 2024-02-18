import {
  Control,
  FieldErrors,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

import { FormInput } from "./FormInput";

type FieldType = "text-input" | "select" | "date" | "date-time" | "time";

export type FormField = UseControllerProps & {
  common: {
    label: string;
    type: FieldType;
    placeholder?: string;
  };
};

export interface FieldError {
  message: string;
  type: string;
}

type FormProps<T> = {
  fields: FormField[];
  control: Control;
  errors?: FieldErrors<FieldValues>;
};

export function Form<T>({ fields, control, errors }: FormProps<T>) {
  return (
    <>
      {fields.map((field, index) => {
        switch (field.common.type) {
          case "select":
            return;
          case "date":
            return;
          case "date-time":
            return;
          case "time":
            return;
          default: {
            return (
              <FormInput
                key={index}
                control={control}
                errors={errors}
                field={field}
              />
            );
          }
        }
      })}
    </>
  );
}
