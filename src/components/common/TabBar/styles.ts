import { Dimensions } from "react-native";

import { createStyleSheet } from "@/config/unistyles";

const { width } = Dimensions.get("window");

export const stylesheet = createStyleSheet((theme) => ({
  mainContainer: {
    position: "absolute",
    flexDirection: "row",
    bottom: 25,
    backgroundColor: "#182028",
    borderRadius: 24,
    marginHorizontal: width * 0.08,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 1,
    borderColor: "#333B42",
  },
}));
