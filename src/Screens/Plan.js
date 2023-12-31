
import React, { useEffect, useState } from 'react'
import httpCommon from '../../http-common'
import { useRoute } from '@react-navigation/native';
import { Box, Text, VStack, Image, ScrollView, View, Heading, Grid, Flex, Button } from 'native-base'
import { StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Logo from './Logo';


const Plan = () => {
  const [plan, setPlan] = useState({});
  const route = useRoute();
  const { id } = route.params;
  useEffect(() => {
    getPlan();
  }, [id]);

  const getPlan = async () => {
    try {
      let response = await httpCommon.get(`/getPlanBy/${id}`);
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
            <View mt={5}>
              <Heading textAlign={"center"}> {plan?.planName}  </Heading>
              <Heading textAlign={"center"}>   Price {plan?.price}/sqft</Heading>
            </View>
            <View mt={5}>
            <Heading textAlign={"start"}>  Cover Appliances </Heading>
            </View>
            <Flex mt={5} direction='row' flexWrap={"wrap"} alignItems="center" justifyContent="start">
              <Flex p={2} mt={5}  >
                {plan?.appliances?.map((item, i) =>
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
            <Heading textAlign={"start"}>  Cover Plus </Heading>
            </View>
            <Flex mt={5} direction='row' flexWrap={"wrap"} alignItems="center" justifyContent="start">
              <Flex p={2} mt={5}  >
                {plan?.plus?.map((item, i) =>
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
          </VStack>
        </Box>
      </Box>
    </ScrollView>
  )
}

export default Plan;

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