import React from 'react'
import { Box,Button, Text,VStack,Image, ScrollView, View, Heading,Grid,Flex } from 'native-base'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from './Logo';

export const TechnicianDashboard = () => {
    const navigation=useNavigation();
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
                <VStack mt={5} space={2}  >
                    <Logo />
                    <View   style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}> 
                     <Heading textAlign={"center"}> Dasboard </Heading>
                      <Button w="30%" rounded="10" bg="black" onPress={handleLogout} >Logout</Button>
                        
                    </View> 
                    <Flex mt={5} direction='row' flexWrap={"wrap"} alignItems="center" justifyContent="center">
                    {[1,2,3,4,5,6,7,8,9].map((m1,i)=>
                    
                    <Flex  key={i}  p={2} mt={5} alignItems="center" w={`${100 / 2}%`} justifyContent="center">
                    <Box style={styles.divSIze}>
                    <Text fontWeight={"bold"}></Text>
                    <Text fontWeight={"bold"} >Customer</Text>
                    <Text fontWeight={"bold"}>{m1}</Text>
                    <Text fontWeight={"bold"}></Text>
                    </Box>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    divSIze:{
        backgroundColor:"white",
        height:"100px",
        width:" 100%",
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        
        // marginTop:"20px",
    } 
});
