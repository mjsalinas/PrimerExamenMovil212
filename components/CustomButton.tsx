import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
};

export default function CustomButton({ title, onPress, variant = "primary" }: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, variant === "secondary" && styles.secondary]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "Blue",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  secondary: {
    backgroundColor: "green",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
