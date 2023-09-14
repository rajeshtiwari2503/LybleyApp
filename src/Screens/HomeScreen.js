import React from 'react'
import { Box,Text } from 'native-base'
import { LoginScreen } from './LoginScreen'
import { TechnicianRegistration } from './TechnicianRegistration'
import { OtpVerification } from './OtpScreen'
 


export const HomeScreen=()=> {
    return (
        <Box flex={1} bg={"amber.100"}>
            {/* <LoginScreen /> */}
            <OtpVerification />
            {/* <TechnicianRegistration/> */}
        </Box>
    )
}
 