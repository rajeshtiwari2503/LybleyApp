import React from 'react'
import { Box, Text, VStack, Image, ScrollView, View, Heading, Grid, Flex } from 'native-base'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export const UserDashboard = () => {
    const url = "https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI"

    const navigation=useNavigation();

    const handleLink = (data) => {
         data==="CreateComplaints"?     navigation.navigate("Login")
         :data==="Plans"?    navigation.navigate("Plans")
         :data==="SubscribePlan"?    navigation.navigate("SubscribePlan")
         :data==="Complaints"?    navigation.navigate("Complaints")
         :console.log("No Router")
    }

    return (
        <ScrollView flex={1} bg={"amber.100"}>
            <Box flexWrap={"wrap"} >
                <Box w="full" h="full" px="6" justifyContent="center"  >
                    <VStack space={2}  >
                        <Image mt={10} style={styles.roundedImage} source={{ uri: url }} alt="image" />
                        <View mt={5}><Heading textAlign={"center"}> Dasboard</Heading></View>
                        <Flex mt={5} direction='row' flexWrap={"wrap"} alignItems="center" justifyContent="center">

                            <Flex p={2} mt={5} alignItems="center" w={`${100 / 2}%`} justifyContent="center">
                                <Box  style={styles.divSIze}>
                                <TouchableOpacity onPress={() => handleLink("CreateComplaints")}>
                                    <Text fontWeight={"bold"}></Text>
                                    <Text  fontWeight={"bold"} >Create Complaints</Text>
                                    <Text fontWeight={"bold"}>1</Text>
                                    <Text fontWeight={"bold"}></Text>
                                    </TouchableOpacity>
                                </Box>
                            </Flex>

                            <Flex p={2} mt={5} alignItems="center" w={`${100 / 2}%`} justifyContent="center">
                                <Box   style={styles.divSIze}>
                                <TouchableOpacity onPress={() => handleLink("Plans")}>
                                    <Text fontWeight={"bold"}></Text>
                                    <Text fontWeight={"bold"} >Plan</Text>
                                    <Text fontWeight={"bold"}>1</Text>
                                    <Text fontWeight={"bold"}></Text>
                                    </TouchableOpacity>
                                </Box>
                            </Flex>
                            <Flex p={2} mt={5} alignItems="center" w={`${100 / 2}%`} justifyContent="center">
                                <Box   style={styles.divSIze}>
                                <TouchableOpacity onPress={() => handleLink("SubscribePlan")}>
                                    <Text fontWeight={"bold"}></Text>
                                    <Text fontWeight={"bold"} >Subscribe Plan</Text>
                                    <Text fontWeight={"bold"}>1</Text>
                                    <Text fontWeight={"bold"}></Text>
                                    </TouchableOpacity>
                                </Box>
                            </Flex>
                            <Flex   p={2} mt={5} alignItems="center" w={`${100 / 2}%`} justifyContent="center">
                                <Box style={styles.divSIze}>
                                <TouchableOpacity onPress={() => handleLink("Complaints")}>
                                    <Text fontWeight={"bold"}></Text>
                                    <Text fontWeight={"bold"} >Complaints</Text>
                                    <Text fontWeight={"bold"}>1</Text>
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

        // marginTop:"20px",
    }
});
