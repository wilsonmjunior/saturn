import { Dimensions } from "react-native";

import { createStyleSheet } from "@/config/unistyles";

const DIMENSIONS = Dimensions.get("window");
export const SHEET_HEIGHT = 220;
export const SHEET_OVER_DRAG = 20;

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    width: DIMENSIONS.width,
    height: SHEET_HEIGHT,
    backgroundColor: theme.colors?.shape,

    position: "absolute",
    bottom: -SHEET_OVER_DRAG * 1.3,

    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  title: {
    color: theme.colors?.white,
    fontSize: theme.fontSize?.lg,
    fontWeight: "bold",
    marginHorizontal: 24,
    marginVertical: 16,
  },
  dragIcon: {
    marginTop: 16,
    alignSelf: "center",
  },
}));
