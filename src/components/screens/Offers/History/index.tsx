import { useState } from "react";
import { View } from "react-native";

import { HistoryCard } from "@/components/common";

export function OffersHistory() {
  const [openHistoryCardId, setOpenHistoryCardId] = useState<number>();

  return (
    <View style={{ gap: 8 }}>
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
    </View>
  );
}
