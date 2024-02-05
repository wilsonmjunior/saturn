import { ImageBackground, ScrollView, View } from "react-native";
import { useRouter } from "expo-router";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { Button } from "@/components/common";
import { useStyles } from "@/config/unistyles";

import { Header } from "./Header";
import { stylesheet } from "./styles";

export function Home() {
  const router = useRouter();

  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Header />

      <ImageBackground 
        source={{ uri: '' }} 
        style={{ height: 180, backgroundColor: '#cecece' }} 
      />

      <ScrollView
        style={{
          marginHorizontal: 16,
          marginTop: 16,
        }}
        contentContainerStyle={{
          gap: 8,
          paddingBottom: getBottomSpace() + 16,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Button
          title="Cadastrar-se"
          icon="arrow-right"
          onPress={() => {
            router.push('/sign-up');
          }}
        />
        
      </ScrollView>
    </View>
  )
}
