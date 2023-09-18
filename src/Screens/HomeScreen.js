import React, { useEffect, useState } from 'react'
import { UserDashboard } from './UserDashboard'
import { View } from 'native-base'
import { TechnicianDashboard } from './TechnicianDashboard'
import LoginScreen from './LoginScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'

export const HomeScreen = () => {
 
    const [data,setData]=useState({});
    const navigation=useNavigation();
    const getItemSync = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key);
          const loginData= JSON.parse(value);
          setData(loginData);
          return loginData;
        } catch (error) {
          console.error('Error retrieving data:', error);
          return null;
        }
      };
      
      useEffect(()=>{
        const dataPromise=getItemSync("logData");
        dataPromise.then((data) => {
            if (data !== null) {
              const user = data;
             if(user.role==="USER"){
                navigation.navigate("User")
             }
             if(user.role==="TECHNICIAN"){
                navigation.navigate("Technician")
            } else {
                navigation.navigate("Login")
            }
          }});
      },[]);
    
    return (
        <View>
         {(data?.role ) ? " " : <LoginScreen />}   
        {/* "<LoginScreen />" */}

        </View>
    )
}

