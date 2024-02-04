import { createStyleSheet } from "@/config/unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  input: {
    backgroundColor: theme.colors?.white,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#cecece',
    height: 56,
    justifyContent: 'center',
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
}));
