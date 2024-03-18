import { View, Text } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export default function Negotiations() {
  return (
    <View style={{ marginTop: getStatusBarHeight() + 24 }}>
      <Text>Negotiations</Text>
    </View>
  );
}
