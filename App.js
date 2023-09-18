import "react-native-gesture-handler"
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from 'native-base';
import  LoginScreen  from "./src/Screens/LoginScreen";
import  TechnicianRegistration from "./src/Screens/TechnicianRegistration";
import { OtpVerification } from "./src/Screens/OtpScreen";
import { HomeScreen } from "./src/Screens/HomeScreen";
import Plans from "./src/Screens/Plans";
import Subscription from "./src/Screens/Subscription";
import Complaint from "./src/Screens/Complaint";
import Plan from "./src/Screens/Plan";
import CreateComplaints from "./src/Screens/CreateComplaints";
import { UserDashboard } from "./src/Screens/UserDashboard";
import { TechnicianDashboard } from "./src/Screens/TechnicianDashboard";

const Stack=createStackNavigator();
 
export default function App() {
  
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="Signup" component={TechnicianRegistration} options={{headerShown: false,}}/>
        <Stack.Screen name="OtpVerification" component={OtpVerification} options={{headerShown: false,}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="Plans" component={Plans} options={{headerShown: false,}}/>
        <Stack.Screen name="Subscription" component={Subscription} options={{headerShown: false,}}/>
        <Stack.Screen name="CreateComplaints" component={CreateComplaints} options={{headerShown: false,}}/>
        <Stack.Screen name="Complaint" component={Complaint} options={{headerShown: false,}}/>
        <Stack.Screen name="Plan" component={Plan} options={{headerShown: false,}}/>
        <Stack.Screen name="User" component={UserDashboard} options={{headerShown: false,}}/>
        <Stack.Screen name="Technician" component={TechnicianDashboard} options={{headerShown: false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}
