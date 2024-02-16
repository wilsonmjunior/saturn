import { useState } from "react";
import { Modal, Text, View } from "react-native";
import { useNavigation } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

import { Button, Input } from "@/components/common";
import { Select } from "@/components/common/Base/Select";
import { useStyles } from "@/config/unistyles";

import { stylesheet } from "./styles";

export function CreatePassword() {
  const [selectedValue, setSelectedValue] = useState('');
  
  const navigation = useNavigation();

  const { styles } = useStyles(stylesheet);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Crie uma nova senha
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <Input placeholder="Digite a sua senha" />
          <Input placeholder="Confirme sua senha" />

          {/* <Modal> 
          <View style={{width: 200, height: 400, position: 'absolute', backgroundColor: 'red', left: 0, right: 0,
    top: 0}}><Text>DEtails</Text></View>
          </Modal> */}
          

        

          <Select selected={selectedValue} onSelectItem={setSelectedValue} />
        </View>

        <View style={styles.buttonsWrapper}>
          <Button
            title='Alterar senha' 
            onPress={() => {}}
          />
          <Button
            title='Cancelar' 
            onPress={() => navigation.goBack()}
            variant="outline"
          />
        </View>

        
      </View>
    </ScrollView>
  )
}
