import { View, Text, Box, Flex, Image, Heading } from 'native-base'
import React, { useEffect, useState } from 'react'
import httpCommon from '../../http-common';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

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
  const url = "https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI"

  return (
    <View>
      <Image mt={10} style={styles.roundedImage} source={{ uri: url }} alt="image" />
      <View mt={5}><Heading textAlign={"center"}> Dasboard</Heading></View>
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
  )
}

export default Plans;

const styles = StyleSheet.create({
  roundedImage: {
    // Adjust the width and height as needed
    width: "100%",
    height: 70,
    borderRadius: 10, // Half of the width or height to create a circular border
  },
  divSIze: {
    backgroundColor: "white",
    height: "100px",
    width: " 100%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  }
});