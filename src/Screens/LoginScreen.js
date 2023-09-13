
import React, { useState } from 'react'
import { Image, Heading, Box, VStack,Text, Input, Button, View } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {  StyleSheet, TextInput } from 'react-native';

export const LoginScreen = () => {
    const url = "https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI"

    const [numberInput, setNumberInput] = useState('');
    const [validationResult, setValidationResult] = useState('');

    const handleInputChange = (text) => {
        // Remove any non-numeric characters from the input
        const sanitizedInput = text.replace(/[^0-9]/g, '');

        // Update the state with the sanitized input
        setNumberInput(sanitizedInput);
    };

    const handleValidation = () => {
        // Check if the input is a valid number
        if (numberInput.length === 10 && !isNaN(Number(numberInput))) {
            setValidationResult('Valid number entered.');
        } else {
            setValidationResult('Please enter a valid number.');
        }
    };
    return (
        <Box flex={1} bg={"amber.100"} >
           
            <Box w="full" h="full"    px="6" justifyContent="center"  >
             
           
               
                <VStack space={2}  >
                <Image  mt={10} style={styles.roundedImage} source={{ uri: url }} alt="image"     />
                <Heading mt={10} style={{   fontWeight:"bold",textAlign: 'center' }}>LOGIN</Heading>
                    <Input  mt={10} variant="outline" w="100%" pl={2}  value={numberInput}
                        onChangeText={handleInputChange}  placeholder='Enter Mobile No.' />
                      {/* <Input type='password' InputLeftElement={<Ionicons name="eye" size={20} color="black" />} variant="outline" w="100%" pl={2}   placeholder='************' /> */}
                      <Text>{validationResult}</Text>
                    
                    <View ><Button   w="100%" rounded="50" bg="black" onPress={handleValidation} >Login</Button>
                        <Button my={10} w="100%" rounded="50" bg="black">SIGN UP</Button>
                    </View>

                </VStack>
            </Box>
        </Box>
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
       width:"100%",
      height: 70,
      borderRadius: 10, // Half of the width or height to create a circular border
    },
  });