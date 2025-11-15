import React = require("react");
import { StyleSheet, TouchableOpacity, Text } from "react-native";

type Props = {
    title: string;
    onPress: () => void;
    variant?: "primary" | "secondary" | "tertiary";
};
export default function CustomButton({title, onPress, variant = "primary"}: Props){
    const styles = getStyles(variant);

    return(
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonTitle}> {title} </Text>
            </TouchableOpacity>
    );
} 

const getStyles = (variant: 'primary' | 'secondary' | 'tertiary') => 
    StyleSheet.create(
        {
            button:{
                borderColor: "#000",
                borderRadius: 6,
                padding: 12, 
                marginBottom: 10,
                backgroundColor: variant === "primary" ? '#E3DBDB' : 
                                    variant === "secondary" ? '#E3DBDB' :
                                        "#656c78"
            }, 
            buttonTitle:{
                color: variant === 'primary'?'#ccc' : 
                        variant === 'secondary'? '#ccc' :
                        '#656c78',
                fontWeight: 'bold'
            }
        }
    )