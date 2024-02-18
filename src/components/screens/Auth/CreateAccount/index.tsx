import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";

import { formFields } from "./fields";
import { stylesheet } from "./styles";

import { BgHeader, Button, Form, Switch } from "@/components/common";
import { useStyles } from "@/config/unistyles";

type CreateAccountData = {
  name: string;
  age: number;
  email: string;
  cellphone: string;
};

export function CreateAccount() {
  const [menuItem, setMenuItem] = useState("1");

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { styles } = useStyles(stylesheet);

  const handleCreateAccount: SubmitHandler<CreateAccountData> = (data) => {
    console.warn("create data: ", data);
  };

  const handleToggle = (value: string) => {
    setMenuItem(value);
  };

  return (
    <View style={styles.container}>
      <BgHeader title="Crie sua conta">
        <View style={styles.switchWrapper}>
          <Switch active={menuItem} onToggle={handleToggle} />
        </View>
      </BgHeader>

      <View style={styles.content}>
        {menuItem === "1" ? (
          <>
            <Form fields={formFields} control={control} errors={errors} />

            <View style={styles.buttonsWrapper}>
              <Button
                title="Criar minha conta"
                onPress={handleSubmit(handleCreateAccount)}
              />
            </View>
          </>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}
