import { View, Text } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { Button } from "@/components/common";

export default function Offers() {
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 16,
        marginTop: getStatusBarHeight() + 32,
      }}
    >
      <Text>Ofertas</Text>

      <Button title="Detalhes" variant="outline" />
    </View>
  );
}
