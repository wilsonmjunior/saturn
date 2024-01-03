import { useEffect } from "react";
import { View, useWindowDimensions } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming
} from "react-native-reanimated";

import { useStyles } from "@/config/unistyles";

import { Tech } from "../Tech";

import { stylesheet } from "./styles";

export function Slider() {
  const { styles } = useStyles(stylesheet);

  const slideX = useSharedValue(0);
  const dimensions = useWindowDimensions();

  const slideAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ 
      translateX: slideX.value,
    }]
  }));

  useEffect(() => {
    slideX.value = withRepeat(withTiming(-dimensions.width * 2, { 
      duration: 5000,
      easing: Easing.linear,
    }), -1);
  }, [])

  function Techs() {
    return (
      <>
        <Tech source={require("../../assets/image-1.png")} />
        <Tech source={require("../../assets/image-2.png")} />
        <Tech source={require("../../assets/image-3.png")} />
      </>
    )
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slide, slideAnimatedStyle]}>
        <Techs />
      </Animated.View>

      <Animated.View style={[styles.slide, slideAnimatedStyle]}>
        <Techs />
      </Animated.View>
    </View>
  );
}
