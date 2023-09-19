import React, { useEffect, useState } from 'react'
import httpCommon from '../../http-common'
import { useRoute } from '@react-navigation/native';
import { Box, Text, VStack, Image, ScrollView, View, Heading, Grid, Flex, Button } from 'native-base'
import { StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Logo from './Logo';

const Subscription = () => {
  const [plan, setPlan] = useState([]);
  const route = useRoute();
  // const { id } = route.params;64e5a1d1819bf788044283a4
  const { id } = "64e5a1d1819bf788044283a4"
  useEffect(() => {
    getSubcriptionPlan();
  }, [id]);

  const getSubcriptionPlan = async () => {
    try {
      let response = await httpCommon.get(`/getSubscriptionByUserId/650575675c8f69154b508c5c`);
      let { data } = response;
      setPlan(data);
    } catch (err) {
      console.log(err);
    }
  }

  
  return (
    <ScrollView flex={1} bg={"amber.100"}>
      <Box flexWrap={"wrap"} >
        <Box w="full" h="full" px="6" justifyContent="center"  >
          <VStack space={2}  >
            <Logo />
           {plan?.map((item,i)=>
           <View key={i}>
            <View mt={5}>
              <Heading textAlign={"center"}> {item?.planName}  </Heading>
              <Heading textAlign={"center"}>   Price {item?.planPrice}/sqft</Heading>
            </View>
            <View mt={5}>
            <Heading >Plan Activate Date : {new Date(item?.createdAt).toLocaleString()}</Heading>
            </View>
            <View mt={5}>
            <Heading textAlign={"start"}> Cover Appliances</Heading>
            </View>
            <Flex mt={5} direction='row' flexWrap={"wrap"} alignItems="center" justifyContent="start">
              <Flex p={2} mt={5}  >
                {item?.planDetail?.appliances?.map((item, i) =>
                  <Box key={i} style={{ flex: 1}} >
                    <View>
                    <Text>{item?.value}  </Text>
                      <CheckBox
                        title={item?.value}
                        checked={item?.checked}
                        // onPress={toggleCheckBox}
                      />
                    </View>
                  </Box>
                )}
              </Flex>
            </Flex>
           
           
            <View mt={5}>
            <Heading textAlign={"start"}>  Cover Plus</Heading>
            </View>
            <Flex mt={5} direction='row' flexWrap={"wrap"} alignItems="center" justifyContent="start">
              <Flex p={2} mt={5}  >
                {item?.planDetail?.plus?.map((item, i) =>
                  <Box key={i} style={{ flex: 1}} >
                    <View>
                    <Text>{item?.value}  </Text>
                      <CheckBox
                        title={item?.value}
                        checked={item?.checked}
                        // onPress={toggleCheckBox}
                      />
                    </View>
                  </Box>
                )}
                 <Button mt={5} mb={5}><Text>Upgrade Plan</Text></Button>
              </Flex>
            </Flex>
            </View>
             )}
          </VStack>
        </Box>
      </Box>
    </ScrollView>
  )
}

export default Subscription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
  roundedImage: {
    // Adjust the width and height as needed
    width: "90px",
    height: "80px",
    borderRadius: 5, // Half of the width or height to create a circular border
},
  planShow: {
    display: "flex"
  }
});