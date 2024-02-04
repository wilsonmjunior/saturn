import { Control, Controller, UseControllerProps } from 'react-hook-form';
import { Text } from 'react-native';

import { useStyles } from '@/config/unistyles';

import { Input } from "../Input";

import { stylesheet } from './styles';

type Rules = {
  required?: true | string;
}[];

type FieldType =  'text-input' | 'select' | 'date' | 'date-time' | 'time';

export type FormField = UseControllerProps & {
  common: {
    label: string;
    type: FieldType;
    placeholder?: string;
  };
};

type FormProps = {
  fields: FormField[];
  control: Control;
  errors?: any;
};

export function Form({ fields, control, errors }: FormProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <> 
      {
        fields.map((field, index) => {
          switch (field.common.type) { 
            case 'select': return;
            case 'date': return;
            case 'date-time': return;
            case 'time': return;
            default: {
              console.warn('beta');
              return (
                <Controller
                  key={index}
                  control={control}
                  name={field.name}
                  rules={field.rules}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      {...field.common}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
              )
            };
          }
        })
      }

      {errors && Object.keys(errors).map((key, index) => (
        <Text key={index} style={styles.errorText}>{errors[key].message}</Text>
      ))}
    </>
  )
}
