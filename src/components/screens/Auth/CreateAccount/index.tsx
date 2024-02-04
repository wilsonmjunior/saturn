import { useState } from "react";
import { View } from "react-native";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "expo-router";

import {
  Button,
  Form,
  Header,
  Switch,
} from "@/components/common";
import { useStyles } from "@/config/unistyles";

import { formFields } from "./fields";
import { stylesheet } from "./styles";

type CreateAccountData = {
  name: string;
  age: number;
  email: string;
  cellphone: string;
}

export function CreateAccount() {
  const [menuItem, setMenuItem] = useState("1");
  
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

        {
          menuItem === '1' ? (
            <>
              <Form 
                fields={formFields}
                control={control}
                errors={errors}
              />
    
              <View style={styles.buttonsWrapper}>
                <Button title="Salvar" onPress={handleSubmit(handleCreateAccount)} /> 
                <Button title="Voltar" variant="outline" onPress={() => router.back()} /> 
              </View>
            </>
          ) : (
            <></>
          )
        }
      </View>
    </View>
  )
}
