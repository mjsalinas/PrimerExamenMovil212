import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

type CustomButtonProps = {
  title: string;
  onPress: () => void; // Corrected prop name to onPress
  type?: 'primary' | 'secondary' | 'tertiary';
};

export default function CustomButton ({
    title,
    onPress, // Corrected prop name
    type = 'primary',
  }: CustomButtonProps) {

  // Dynamically get styles based on type
  const buttonStyles = getButtonStyles(type);

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={buttonStyles.button} onPress={onPress}>
        <Text style={buttonStyles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Define base styles and variant-specific styles
const styles = StyleSheet.create({
  buttonContainer: {
    width: '90%',
    marginVertical: 10, // Added some vertical margin for spacing
    alignSelf: 'center', // Center the button horizontally
  },
});

// Function to return styles based on button type
const getButtonStyles = (type: CustomButtonProps['type']) => {
    switch (type) {
        case 'secondary':
            return StyleSheet.create({
                button: {
                    backgroundColor: '#6c757d', // Gray
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: '#5a6268',
                },
                buttonTitle: {
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: '600',
                },
            });
        case 'tertiary':
            return StyleSheet.create({
                button: {
                    backgroundColor: 'transparent',
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: '#007bff', // Blue border
                },
                buttonTitle: {
                    color: '#007bff', // Blue text
                    fontSize: 16,
                    fontWeight: '600',
                },
            });
        case 'primary':
        default:
            return StyleSheet.create({
                button: {
                    backgroundColor: '#007bff', // Blue
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    elevation: 5,
                },
                buttonTitle: {
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: '600',
                },
            });
    }
};
