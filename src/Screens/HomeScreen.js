import React from 'react'
import { Box } from 'native-base'
import { LoginScreen } from './LoginScreen'


export const HomeScreen=()=> {
    return (
        <Box flex={1} bg={"amber.100"}>
            <LoginScreen />
        </Box>
    )
}
 