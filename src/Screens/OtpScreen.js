import { Box, Button, Heading, Image, Text, VStack, View } from 'native-base';
import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
export const OtpVerification = () => {
    const url = "https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI"


    let otpInput = useRef(null);

    const clearText = () => {
        otpInput?.current?.clear();
    }

    const setText = () => {
        otpInput.current.setValue("1234");
    }

    return (
        <Box   bg={"amber.100"} >

            <Box w="full"   px="6" justifyContent="center"  >
            <VStack top={100} space={2}  >
                <Image  mt={10} style={styles.roundedImage} source={{ uri: url }} alt="image"     />
                <Heading mt={10} style={{   fontWeight:"bold",textAlign: 'center' }}>Otp Verification</Heading>
                <View px={6}>
                    <OTPTextInput ref={e => (otpInput = e)} inputCount={4} />
                    <Button bg={"black"} mt={10} title="clear"  onPress={clearText}><Text style={{fontWeight:"bold",color:"white" }}>Verify</Text></Button>
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