import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
};

export default function CustomButton({ title, onPress, variant = "primary" }: Props) {
  const styles = getStyles(variant);
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === "secondary" && styles.secondary
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;