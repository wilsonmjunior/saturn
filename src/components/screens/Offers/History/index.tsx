import { useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { HistoryCard } from "@/components/common";

export function OffersHistory() {
  const [openHistoryCardId, setOpenHistoryCardId] = useState<number>();

  return (
    <View style={{ flex: 1, paddingBottom: getBottomSpace() + 65 }}>
      <ScrollView
        contentContainerStyle={{
          gap: 16,
          paddingBottom: getBottomSpace() + 65,
        }}
        showsVerticalScrollIndicator={false}
      >
        <HistoryCard
          id={1}
          isOpenActionMenu={openHistoryCardId === 1}
          onOpenMenu={setOpenHistoryCardId}
          actionItems={["Editar", "Excluir"]}
        />
        <HistoryCard
          id={2}
          isOpenActionMenu={openHistoryCardId === 2}
          onOpenMenu={setOpenHistoryCardId}
          actionItems={["Editar", "Excluir"]}
        />
        <HistoryCard
          id={3}
          isOpenActionMenu={openHistoryCardId === 3}
          onOpenMenu={setOpenHistoryCardId}
          actionItems={["Editar", "Excluir"]}
        />
      </ScrollView>
    </View>
  );
}
