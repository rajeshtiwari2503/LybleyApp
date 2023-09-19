import React, { useState } from 'react';
import { Box, Button, Heading, Image, Text, VStack, View } from 'native-base';
import { StyleSheet } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import httpCommon from '../../http-common';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from './Logo';

export const OtpVerification = () => {
    const url = "https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI"


    const navigation = useNavigation();
    const [otp, setOtp] = useState('');

    const handleOTPChange = (otp) => {
        setOtp(otp);
    };

    const handleVerify = async () => {
        try {
            let response = await httpCommon.post("/otpPhoneVerification", { otp: otp })
            let { data } = response;

            if (data?.status === true) {
                let str = JSON.stringify(data?.user);
                await AsyncStorage.setItem("logData", str);

                if (data?.user?.role === "USER") {
                    navigation.navigate("User")
                }
                else if (data?.user?.role === "TECHNICIAN") {
                    navigation.navigate("Technician");
                }
                else {
                    console.log("err");
                }
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <Box bg={"amber.100"} >

            <Box w="full" h={"full"} px="6" justifyContent="center"  >
                <VStack space={2}  >
                    <Logo />
                    <Heading mt={20} style={{ fontWeight: "bold", textAlign: 'center' }}>{"Otp Verification"}</Heading>
                    <View mt={10} >
                        <OTPTextInput containerStyle={styles.otpContainer} textInputStyle={styles.otpTextInput} handleTextChange={handleOTPChange} inputCount={5} />
                        <Button bg={"black"} mt={10} onPress={() => handleVerify()}><Text style={{ fontWeight: "bold", color: "white" }}>{"Verify"}</Text></Button>
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
        width: "90px",
        height: "80px",
        borderRadius: 5, // Half of the width or height to create a circular border
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    otpTextInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 0,
        fontSize: 15,
        letterSpacing: 10,

    },
});