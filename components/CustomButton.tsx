import React from "react";
import { TouchableOpacity, Text, GestureResponderEvent, StyleSheet, ViewStyle } from "react-native";

type Variant = "primary" | "secondary";

type CustomButtonProps = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  variant?: Variant;
  style?: ViewStyle;
};

const variantStyles = {
  primary: { backgroundColor: '#0a84ff' },
  secondary: { backgroundColor: '#6e6e6e' }
} as const;

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, variant = 'primary', style }) => {
  const vs = variantStyles[variant] || variantStyles.primary;
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={[styles.button, vs, style]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 6,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontWeight: '600'
  }
});

export default CustomButton;
