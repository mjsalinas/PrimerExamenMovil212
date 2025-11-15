import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

type Props = {
    value: string;
    placeholder: string;
    onChange: (text: string) => void;
    type?: 'text' | 'number';
    multiline?: boolean;
};

export default function CustomInput({ value, placeholder, onChange, type = "text", multiline = false }: Props) {
    const keyboardType = type === 'number' ? 'numeric' : 'default';

    return (
        <View style={styles.wrapper}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                style={[styles.input, multiline && styles.multiline]}
                keyboardType={keyboardType}
                multiline={multiline}
                numberOfLines={multiline ? 4 : 1}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 12,
        backgroundColor: '#f9f9f9',
    },
    multiline: {
        textAlignVertical: 'top',
        height: 100,
    }
});