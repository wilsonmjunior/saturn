import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { Document, Header } from "@/components/common";

export default function Documents() {
  return (
    <View style={{ flex: 1, paddingBottom: getBottomSpace() + 65 }}>
      <Header />

      <ScrollView
        contentContainerStyle={{ gap: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <Document />
        <Document />
        <Document />
      </ScrollView>
    </View>
  );
}
