import React, { useEffect, useState } from 'react'
import { Box,Button, Text,VStack,Image, ScrollView, View, Heading,Grid,Flex } from 'native-base'
import { StyleSheet,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from './Logo';

export const TechnicianDashboard = () => {
    const navigation=useNavigation();
    const [data, setData] = useState({});

    const getItemSync = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            const loginData = JSON.parse(value);
            setData(loginData);
            return loginData;
        } catch (error) {
            console.error('Error retrieving data:', error);
            return null;
        }
    };

    useEffect(() => {
        const dataPromise = getItemSync("logData");
        dataPromise.then((data) => {
            if (data !== null) {
                const user = data;
            }
        });
    }, []);
    const id = data?._id
    const handleLink = (data) => {
        data === "CreateComplaints" ? navigation.navigate("CreateComplaints")
            : data === "Plans" ? navigation.navigate("Plans")
                : data === "SubscribePlan" ? navigation.navigate("Subscription")
                    : data === "Complaints" ? navigation.navigate("Complaint", { id })
                        : console.log("No Router")
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
                        <Logo />
                        <Box mt={5} style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                             <Heading textAlign={"center"}> Dasboard</Heading> 
                            <View >
                            <Button w="30%" rounded="10" bg="black" onPress={handleLogout} >Logout</Button>
                            </View>
                        </Box>
                        <View mt={5}>
                            <Heading >  {"Name :"} {data?.name}</Heading>
                        </View>
                        <View >
                            <Heading >  {"Email :"} {data?.email}</Heading>
                        </View>
                        <View >
                            <Heading >  {"Contact :"} {data?.contact}</Heading>
                        </View>
                        <View >
                            <Heading >  {"Joining Date :"} {new Date(data?.createdAt).toLocaleDateString()}</Heading>
                        </View>
                        <Flex mt={5} direction='row' flexWrap={"wrap"} alignItems="center" justifyContent="center">
                            <Flex p={2} mt={5} alignItems="center" w={`${100 / 2}%`} justifyContent="center">
                                <Box style={styles.divSIze}>
                                    <TouchableOpacity onPress={() => handleLink("CreateComplaints")}>
                                        <Text fontWeight={"bold"}></Text>
                                        <Text fontWeight={"bold"}></Text>
                                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                            {/* <Ionicons name="add" size={50} style={{ fontWeight: "bold" }} color="black" /> */}
                                            <Text fontWeight={"bold"} >Revenue</Text>
                                        </View>
                                        <Text fontWeight={"bold"}></Text>
                                        <Text fontWeight={"bold"}></Text>
                                        <Text fontWeight={"bold"}></Text>

                                    </TouchableOpacity>
                                </Box>
                            </Flex>

                            <Flex p={2} mt={5} alignItems="center" w={`${100 / 2}%`} justifyContent="center">
                                <Box style={styles.divSIze}>
                                    <TouchableOpacity onPress={() => handleLink("Plans")}>
                                        <Text fontWeight={"bold"}></Text>
                                        <Text fontWeight={"bold"}></Text>
                                        <Text fontWeight={"bold"} >Pending Complaints</Text>
                                        <Text fontWeight={"bold"}></Text>
                                        <Text fontWeight={"bold"}></Text>
                                        <Text fontWeight={"bold"}></Text>
                                    </TouchableOpacity>
                                </Box>
                            </Flex>
                            <Flex p={2} mt={5} alignItems="center" w={`${100 / 2}%`} justifyContent="center">
                                <Box style={styles.divSIze}>
                                    <TouchableOpacity onPress={() => handleLink("SubscribePlan")}>
                                        <Text fontWeight={"bold"}></Text>
                                        <Text fontWeight={"bold"}></Text>
                                        <Text fontWeight={"bold"} >Completed Complaints</Text>
                                        <Text fontWeight={"bold"}></Text>
                                        <Text fontWeight={"bold"}></Text>
                                        <Text fontWeight={"bold"}></Text>
                                    </TouchableOpacity>
                                </Box>
                            </Flex>
                            <Flex p={2} mt={5} alignItems="center" w={`${100 / 2}%`} justifyContent="center">
                                <Box style={styles.divSIze}>
                                    <TouchableOpacity onPress={() => handleLink("Complaints")}>
                                        <Text fontWeight={"bold"}></Text>
                                        <Text fontWeight={"bold"}></Text>
                                        <Text fontWeight={"bold"} > All Complaints</Text>
                                        <Text fontWeight={"bold"}></Text>
                                        <Text fontWeight={"bold"}></Text>
                                        <Text fontWeight={"bold"}>&nbsp;</Text>
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
    
    divSIze: {
        backgroundColor: "#f5881f",
        // backgroundColor: "#f5881f",
        height: "100px",
        width: " 100%",
        borderRadius: 5,
        color:"black",
        alignItems: "center",
        margin:"10px",
        justifyContent: "center",

        // marginTop:"20px",
    }
 ,
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    
});
