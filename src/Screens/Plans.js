import { View,Text,Box,Flex } from 'native-base'
import React, { useEffect, useState } from 'react'
import httpCommon from '../../http-common';
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Plans = () => {
    const [plans,setPlans]=useState([]);
    const navigation=useNavigation();
    useEffect(()=>{
        getPlans();
      },[]);

    const getPlans=async()=>{
        try{
          let response=await httpCommon.get("/getPlans");
          let {data}=response;
          setPlans(data);
        }catch(err){
          console.log(err);
        }
    }
   
    let homeShieldLite=plans?.find(p1=>p1?.planName==="Home Shield Lite");
    let homeShieldBasic=plans?.find(p1=>p1?.planName==="Home Shield Basic");
    let homeShieldPlus=plans?.find(p1=>p1?.planName==="Home Shield Plus");
    let homeShieldProPlus=plans?.find(p1=>p1?.planName==="Home Shield Pro Plus");

    const handleNavigate=(id)=>{
       navigation.navigate("Plan",{id});
    }
  return (
    <View>
        <Flex mt={5} direction='row' flexWrap={"wrap"} alignItems="center" justifyContent="center">
                    {plans?.map((m1,i)=>
                    
                    <Flex   key={i}  p={2} mt={5} alignItems="center" w={`${100 / 2}%`} justifyContent="center">
                    <Box style={styles.divSIze}>
                    <Text fontWeight={"bold"}></Text>
                    <Text fontWeight={"bold"} onPress={()=>handleNavigate(m1?._id)} >{m1.planName}</Text>
                    <Text fontWeight={"bold"}>Price {m1.price}/sqft</Text>
                    <Text fontWeight={"bold"}></Text>
                    </Box>
                    </Flex>
                    
                    )}
                    </Flex>
    </View>
  )
}

export default Plans;

const styles = StyleSheet.create({
    divSIze:{
        backgroundColor:"white",
        height:"100px",
        width:" 100%",
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
    } 
});