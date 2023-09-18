import React, { useEffect, useState } from 'react'
import { Box,Button, Text, VStack, Image, ScrollView, View, Heading, Grid, Flex } from 'native-base'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const UserDashboard = (props) => {
// console.log(props);
    const url = "https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI"

    const navigation=useNavigation();

      const [data,setData]=useState({});
   
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
            }});
        },[]);
        const id=data?._id
        const handleLink = (data) => {
            data==="CreateComplaints"?     navigation.navigate("CreateComplaints")
            :data==="Plans"?    navigation.navigate("Plans")
            :data==="SubscribePlan"?    navigation.navigate("Subscription")
            :data==="Complaints"?    navigation.navigate("Complaint",{id})
            :console.log("No Router")
       }
       const handleLogout = async () => {
           try {
             await AsyncStorage.removeItem("logData");
             navigation.navigate("HomeScreen")
           } catch (error) {
             console.error('Error removing data:', error);
           }
         };
    return (
        <ScrollView flex={1} bg={"amber.100"}>
            <Box flexWrap={"wrap"} >
                <Box w="full" h="full" px="6" justifyContent="center"  >
                    <VStack space={2}  >
                    <View style={styles.container}> <Image mt={10} style={styles.roundedImage} source={{ uri: url }} alt="image" /></View>
                        <View mt={5} style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}><View> <Heading textAlign={"center"}> Dasboard</Heading></View><View ><Button w="100%" rounded="10" bg="black" onPress={handleLogout} >Logout</Button>
                        
                    </View></View>
                        <View mt={5}>
                                <Heading >  Name : {data?.name}</Heading>
                            </View>
                            <View >
                                <Heading >  Email : {data?.email}</Heading>
                            </View>
                            <View >
                                <Heading >  Contact : {data?.contact}</Heading>
                            </View>
                            <View >
                                <Heading >  Joining Date : {new Date (data?.createdAt).toLocaleDateString()}</Heading>
                            </View>
                        <Flex mt={5} direction='row' flexWrap={"wrap"} alignItems="center" justifyContent="center">
                            <Flex p={2} mt={5} alignItems="center" w={`${100 / 2}%`} justifyContent="center">
                                <Box   style={styles.divSIze}>
                                <TouchableOpacity  onPress={() => handleLink("CreateComplaints")}>
                                    <Text fontWeight={"bold"}></Text>
                                    <Text fontWeight={"bold"}></Text>
                                    <Text  fontWeight={"bold"} >Create Complaints</Text>
                                    <Text fontWeight={"bold"}>1</Text>
                                    <Text fontWeight={"bold"}></Text>
                                    <Text fontWeight={"bold"}></Text>

                                    </TouchableOpacity>
                                </Box>
                            </Flex>

                            <Flex p={2} mt={5} alignItems="center" w={`${100 / 2}%`} justifyContent="center">
                                <Box   style={styles.divSIze}>
                                <TouchableOpacity onPress={() => handleLink("Plans")}>
                                    <Text fontWeight={"bold"}></Text>
                                    <Text fontWeight={"bold"}></Text>
                                    <Text fontWeight={"bold"} >Plan</Text>
                                    <Text fontWeight={"bold"}>1</Text>
                                    <Text fontWeight={"bold"}></Text>
                                    <Text fontWeight={"bold"}></Text>
                                    </TouchableOpacity>
                                </Box>
                            </Flex>
                            <Flex p={2} mt={5} alignItems="center" w={`${100 / 2}%`} justifyContent="center">
                                <Box   style={styles.divSIze}>
                                <TouchableOpacity onPress={() => handleLink("SubscribePlan")}>
                                    <Text fontWeight={"bold"}></Text>
                                    <Text fontWeight={"bold"}></Text>
                                    <Text fontWeight={"bold"} >Subscribe Plan</Text>
                                    <Text fontWeight={"bold"}>1</Text>
                                    <Text fontWeight={"bold"}></Text>
                                    <Text fontWeight={"bold"}></Text>
                                    </TouchableOpacity>
                                </Box>
                            </Flex>
                            <Flex   p={2} mt={5} alignItems="center" w={`${100 / 2}%`} justifyContent="center">
                                <Box style={styles.divSIze}>
                                <TouchableOpacity onPress={() => handleLink("Complaints")}>
                                    <Text fontWeight={"bold"}></Text>
                                    <Text fontWeight={"bold"}></Text>
                                    <Text fontWeight={"bold"} >Complaints</Text>
                                    <Text fontWeight={"bold"}>1</Text>
                                    <Text fontWeight={"bold"}></Text>
                                    <Text fontWeight={"bold"}></Text>
                                    </TouchableOpacity>
                                </Box>
                            </Flex>

                        </Flex>
                    </VStack>
                </Box>
            </Box>
        </ScrollView>
    )
}
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
    divSIze: {
        backgroundColor: "#b6e6fa",
        height: "100px",
        width: " 100%",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",

        // marginTop:"20px",
    }
});
