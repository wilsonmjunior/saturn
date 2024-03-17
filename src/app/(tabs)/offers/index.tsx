import { View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { OffersHistory } from "@/components/screens/Offers";

export default function Offers() {
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 16,
        gap: 10,
        marginTop: getStatusBarHeight() + 42,
      }}
    >
      <OffersHistory />
    </View>
  );
}
