import { View } from "react-native";

import { HistoryCard } from "@/components/common";

export function OffersHistory() {
  return (
    <View style={{ gap: 8 }}>
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </View>
  );
}
