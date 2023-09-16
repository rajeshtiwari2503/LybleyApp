import { View,Text } from 'native-base'
import React, { useEffect, useState } from 'react'
import httpCommon from '../../http-common'
import { useRoute } from '@react-navigation/native';

const Plan = () => {
    const [plan,setPlan]=useState({});
   const route=useRoute();
   const {id}=route.params;
    useEffect(()=>{
        getPlan();
    },[id]);
    
    const getPlan=async()=>{
      try{
       let response=await httpCommon.get(`/getPlanBy/${id}`);
       let {data}=response;
       setPlan(data);
      }catch(err){
       console.log(err);
      }
    }
console.log(plan);
  return (
    <View>
        <Text>Plan</Text>
    </View>
  )
}

export default Plan;