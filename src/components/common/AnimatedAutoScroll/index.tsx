import { useEffect, useRef } from "react";
import { View, Text, Dimensions, useWindowDimensions } from "react-native";
import Animated, {
  useAnimatedRef,
  useSharedValue,
  scrollTo,
  withRepeat,
  withTiming,
  useAnimatedReaction,
  Easing,
  AnimatedRef,
} from "react-native-reanimated";

const ITEM_MARGIN = 10;
const DURATION = 10000;

export function AnimatedAutoScroll() {
  const contentHeight = useRef(0);

  const scrollAnimatedRef =
    useAnimatedRef() as AnimatedRef<Animated.ScrollView>;

  const scroll = useSharedValue(0);

  const { width } = useWindowDimensions();

  const items = Array.from(Array(10).keys());

  useAnimatedReaction(
    () => scroll.value,
    (currentScroll) => {
      scrollTo(
        scrollAnimatedRef,
        currentScroll * (width + 2 * ITEM_MARGIN),
        0,
        false,
      );
    },
  );

  const onContentSizeChange = (contentWidth, contentHeightValue) => {
    contentHeight.current = contentHeightValue;
  };

  const startAutoScroll = () => {
    scroll.value = withRepeat(
      withTiming(items.length - 1, {
        duration: DURATION * (items.length - 1),
        easing: Easing.linear,
      }),
      0,
      false,
    );
  };

  useEffect(() => {
    startAutoScroll();
  }, []);

  return (
    <Animated.ScrollView
      ref={scrollAnimatedRef}
      horizontal
      onContentSizeChange={onContentSizeChange}
    >
      {items.map((_, i) => (
        <View
          key={i}
          style={{
            backgroundColor: "white",
            aspectRatio: 1,
            width: Dimensions.get("window").width,
            margin: ITEM_MARGIN,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text style={{ textAlign: "center" }}>{i}</Text>
        </View>
      ))}
    </Animated.ScrollView>
  );
}
