import { Dimensions } from "react-native";

import { createStyleSheet } from "@/config/unistyles";

export const stylesheet = createStyleSheet(() => ({
  container: {
    width: Dimensions.get("screen").width,
  },
}));
