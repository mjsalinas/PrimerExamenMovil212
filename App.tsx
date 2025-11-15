import StackNavigator from "./src/screens/navigation/StackNavigator"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { navigationRef } from "./src/screens/navigation/NavigationService"
import HomeScreen from "./src/screens/HomeScreen"
export default function App() {
  return (
    <HomeScreen>
      
    </HomeScreen>
   /*<NavigationContainer ref={navigationRef}>
          <StackNavigator />
        </NavigationContainer>
        */
    
         
       
  )
}