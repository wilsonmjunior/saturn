import { FlatList, View, useWindowDimensions } from "react-native";

type HorizontalListProps = {
  items: string[];
};

export function HorizontalList({ items }: HorizontalListProps) {
  const dimensions = useWindowDimensions();

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => String(item)}
      horizontal
      snapToOffsets={[...Array(items.length)].map(
        (_, index) => index * (dimensions.width * 0.8 - 40) + (index - 1 * 40),
      )}
      snapToAlignment="start"
      scrollEventThrottle={16}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View
          style={{
            width: dimensions.width * 0.8 - 20,
            height: 200,
            flexDirection: "row",
            marginHorizontal: 10,
            backgroundColor: item,
            borderRadius: 12,
          }}
        />
      )}
    />
  );
}
