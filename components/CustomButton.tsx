import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ label, onPress }: { label: string; onPress?: () => void }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default CustomButton;


