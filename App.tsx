import React from "react";
import StackNavigator from "./Navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./Navigation/NavigationService";
import { ThemeProvider } from "./contexts/ThemeContext"; 
import { AuthProvider } from "./contexts/AuthContext"; 

export default function App() {
  return (
    <AuthProvider> 
      <ThemeProvider> 
        <NavigationContainer ref={navigationRef}>
          <StackNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  );
}
