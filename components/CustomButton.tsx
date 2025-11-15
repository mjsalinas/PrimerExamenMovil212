import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props ={
  label: string,
  onPress: ()=>void
}
const CustomButton = ({ label, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={{ color: "white" }}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer:{
    backgroundColor: '#4daf51',
    padding: 10,
    marginVertical: 15,
    borderRadius:10,
  }
})

export default CustomButton;