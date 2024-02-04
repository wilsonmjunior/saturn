import { useState } from "react";
import { View } from "react-native";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "expo-router";

import { Button, Form, FormField, Header, Switch } from "@/components/common";
import { useStyles } from "@/config/unistyles";

import { stylesheet } from "./styles";

type CreateAccountData = {
  name: string;
  age: number;
  email: string;
  cellphone: string;
}

const formFields = [
  {
    name: "name",
    rules: { required: 'Nome obrigatório' },
    common: {
      label: "Nome",
      type: "text-input",
      placeholder: "Nome",
    }
  },
  // {
  //   name: "age",
  //   label: "Idade",
  //   type: "text-input",
  //   placeholder: "Idade",
  // },
  // {
  //   name: "email",
  //   label: "E-mail",
  //   type: "text-input",
  //   placeholder: "E-mail",
  //   rules: { required: "This field is required" }
  // },
  // {
  //   name: "cellphone",
  //   label: "Celular",
  //   type: "text-input",
  //   placeholder: "Celular"
  // },
] as FormField[];

export function CreateAccount() {
  const [menuItem, setMenuItem] = useState("");
  
  const { 
    control, 
    formState: { 
      errors,
    }, 
    handleSubmit,
  } = useForm();

  const router = useRouter();

  const { styles } = useStyles(stylesheet);

  const handleCreateAccount: SubmitHandler<CreateAccountData> = (data) => {
    console.warn('create data: ', data);
  };

  const handleToggle = (value: string) => {
    setMenuItem(value);
  };

  return (
    <View style={styles.container}>
      <Header title="Sua Conta" />
      
      <View style={styles.content}>
        <Switch active={menuItem} onToggle={handleToggle} />

        <Form 
          fields={formFields}
          control={control}
          errors={errors}
        />

        <View style={styles.buttonsWrapper}>
          <Button title="Salvar" onPress={() => handleSubmit(handleCreateAccount)} /> 
          <Button title="Voltar" variant="outline" onPress={() => router.back()} /> 
        </View>
      </View>
    </View>
  )
}
