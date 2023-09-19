
import React, { useState } from 'react'
import {   Heading, Box, VStack, Text, Input, Button, View } from 'native-base'
import httpCommon from '../../http-common';
import { useNavigation } from '@react-navigation/native';
import Logo from './Logo';

const LoginScreen = () => {
    const navigation=useNavigation();

    const [numberInput, setNumberInput] = useState('');
    const [validationResult, setValidationResult] = useState('');

    const handleInputChange = (text) => {
        // Remove any non-numeric characters from the input
        const sanitizedInput = text.replace(/[^0-9]/g, '');

        // Update the state with the sanitized input
        setNumberInput(sanitizedInput);
    };

   
    const handleValidation = async() => {
        // Check if the input is a valid number
        if (numberInput.length === 10 && !isNaN(Number(numberInput))) {
            try {
                let response = await httpCommon.post("/login",{contact:numberInput})
                let {data}=response;
                if(data?.status===true){
                    navigation.navigate("OtpVerification")
                }
            }
            catch (err) {
                console.log(err);
            }
        } else {
            setValidationResult('Please enter a valid number.');
        }
    };
    return (
        <Box flex={1} bg={"white"} >

            <Box w="full" h="full" px="6" justifyContent="center"  >

                <VStack space={2}  >
                    <Logo  />
                    <Heading mt={20} style={{ fontWeight: "bold", textAlign: 'center' }}> {"LOGIN"}</Heading>
                    <Input mt={10} variant="outline" w="100%" pl={2} value={numberInput}
                        onChangeText={handleInputChange} placeholder='Enter Mobile No.' />
                    <Text>{validationResult}</Text>

                    <View >
                        <Button w="100%" rounded="10" bg="black" onPress={handleValidation} > Login </Button>
                        <Button my={10} w="100%" rounded="10" bg="black" onPress={() => navigation.navigate("Signup")}>  SIGN UP </Button>
                    </View>

                </VStack>
            </Box>
        </Box>
    )
}
export default LoginScreen;
