import {StyleSheet,Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import {MaterialIcons, Ionicons} from "@expo/vector-icons";
import { useState } from "react";

type Props = {
    type?: 'text' | 'number';
    value: string;
    placeholder : string;
    onChange: (text: string) => void;
    multiline: boolean;
}

export default function CustomInput ({type = "text", multiline = false, value, placeholder, onChange}: Props){
   

    const getError = () => {
        if(type === 'number' && !(/^[0-9]*$/).test(value)) return 'Ingrese solo numeros';
        // validar campos obligatorios
    }
    const error = getError();    
    return(
        <View style={styles.Container}>
            <TextInput placeholder={placeholder}
             value={value} onChangeText={onChange}
            />
            {error&&(<Text>{error}</Text>)}
        </View>
    );
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor: 'white',
        borderRadius: 8,
        width: '90%',
        height: 45,
        marginVertical: 6,
    }
})