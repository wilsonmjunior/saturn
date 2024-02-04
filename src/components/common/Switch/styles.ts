import { createStyleSheet } from "@/config/unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    height: 56, 
    flexDirection: 'row', 
    backgroundColor: theme.colors?.white,
    borderRadius: 8,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button: { 
    flex: 1,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
