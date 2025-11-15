import React from "react";
import { TouchableOpacity, Text, StyleSheet} from "react-native";

type Props = {
    title: string;
    onPress: () => void;
    variant?: "primary" | "secondary" | "tertiary";
};


export default function CustomButton ({ title, variant = "primary"}: Props){
  const styles = getStyles(variant);

  return (
    <TouchableOpacity style={{ backgroundColor: "blue", padding: 10 }}>
      <Text style={{ color: "white" }}>{title}</Text>
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
                backgroundColor: variant === "primary" ? '#2d0f2fff' : 
                                    variant === "secondary" ? '#E3DBDB' :
                                        "#fff"
            }, 
            buttonTitle:{
                color: variant === 'primary'?'#ccc' : 
                        variant === 'secondary'? '#000' :
                        '#656c78',
                fontWeight: 'bold'
            }
        }
    )

};