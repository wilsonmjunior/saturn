import { useRef, useState } from "react";
import {
  View,
  TextInput,
  Animated,
  StyleSheet,
  TextInputProps,
} from "react-native";

export type FloatingLabelInputProps = TextInputProps & {
  label: string;
};

export function FloatingLabelInput({
  label,
  ...props
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const labelAnim = useRef(new Animated.Value(0)).current; // Animação para o label

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(labelAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false, // 'true' não é suportado para animações de layout no momento
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      Animated.timing(labelAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const labelStyle = {
    position: "absolute",
    left: 0,
    top: labelAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 0],
    }),
    fontSize: labelAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: labelAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["#aaa", "#000"],
    }),
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={labelStyle}>{label}</Animated.Text>
      <TextInput
        {...props}
        style={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={setValue}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    marginVertical: 4,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    fontSize: 16,
  },
});
