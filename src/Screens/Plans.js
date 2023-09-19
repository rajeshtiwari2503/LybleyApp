import React, { useEffect, useState } from 'react'
import { View, Text, Box, Flex, Image, Heading, ScrollView} from 'native-base'
import httpCommon from '../../http-common';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Logo from './Logo';

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    getPlans();
  }, []);

  const getPlans = async () => {
    try {
      let response = await httpCommon.get("/getPlans");
      let { data } = response;
      setPlans(data);
    } catch (err) {
      console.log(err);
    }
  }

  let homeShieldLite = plans?.find(p1 => p1?.planName === "Home Shield Lite");
  let homeShieldBasic = plans?.find(p1 => p1?.planName === "Home Shield Basic");
  let homeShieldPlus = plans?.find(p1 => p1?.planName === "Home Shield Plus");
  let homeShieldProPlus = plans?.find(p1 => p1?.planName === "Home Shield Pro Plus");

  const handleNavigate = (id) => {
    navigation.navigate("Plan", { id });
  }

  return (
    <ScrollView>
    <View  px="6" >
      <Logo />
      <View mt={5}><Heading textAlign={"center"}> Plans</Heading></View>
      <Flex mt={5} direction='row' flexWrap={"wrap"} alignItems="center" justifyContent="center">
        {plans?.map((m1, i) =>

          <Flex key={i} p={2} mt={5} alignItems="center" w={`${100 / 2}%`} justifyContent="center">
            <Box style={styles.divSIze}>
              <TouchableOpacity onPress={() => handleNavigate(m1?._id)}>
                <Text fontWeight={"bold"}></Text>
                <Text fontWeight={"bold"}  >{m1.planName}</Text>
                <Text fontWeight={"bold"}>Price {m1.price}/sqft</Text>
                <Text fontWeight={"bold"}></Text>
              </TouchableOpacity>
            </Box>
          </Flex>

        )}
      </Flex>
    </View>
    </ScrollView>
  )
}

export default Plans;

const styles = StyleSheet.create({
  
  divSIze: {
    backgroundColor: "white",
    height: "100px",
    width: " 100%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  }
});