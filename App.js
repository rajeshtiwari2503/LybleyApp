import "react-native-gesture-handler"
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from 'native-base';
import  LoginScreen  from "./src/Screens/LoginScreen";
import  TechnicianRegistration from "./src/Screens/TechnicianRegistration";
import { OtpVerification } from "./src/Screens/OtpScreen";
import { HomeScreen } from "./src/Screens/HomeScreen";

const Stack=createStackNavigator();
 
export default function App() {
  
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OtpVerification">
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Signup" component={TechnicianRegistration}/>
        <Stack.Screen name="OtpVerification" component={OtpVerification}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}
