import React from 'react'
import { Box, Text,VStack,Image, ScrollView, View, Heading,Grid,Flex } from 'native-base'
import { LoginScreen } from './LoginScreen'
import { TechnicianRegistration } from './TechnicianRegistration'
import { OtpVerification } from './OtpScreen'
import { StyleSheet } from 'react-native'



export const HomeScreen = () => {
    const url = "https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI"

    return (
        <ScrollView flex={1} bg={"amber.100"}>
        <Box flexWrap={"wrap"} >
            <Box w="full" h="full" px="6" justifyContent="center"  >
                <VStack space={2}  >
                    <Image mt={10} style={styles.roundedImage} source={{ uri: url }} alt="image" />
                    <View mt={5}><Heading textAlign={"center"}> Dasboard</Heading></View>
                    <Flex mt={5} direction='row' flexWrap={"wrap"} alignItems="center" justifyContent="center">
                    {[1,2,3,4,5,6,7,8,9].map(m1=>
                    
                    <Flex p={2} mt={5} alignItems="center" justifyContent="center">
                    <View style={styles.divSIze}>
                    <Text fontWeight={"bold"} >Customer</Text>
                    <Text fontWeight={"bold"}>{m1}</Text>
                    </View>
                    </Flex>
                    
                    )}
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
    divSIze:{
        backgroundColor:"white",
        height:"80px",
        width:"200px",
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        // marginTop:"20px",
    } 
});
