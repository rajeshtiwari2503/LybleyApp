import React from 'react'
import { UserDashboard } from './UserDashboard'
import { View } from 'native-base'
import { TechnicianDashboard } from './TechnicianDashboard'
import LoginScreen from './LoginScreen'

export const HomeScreen = () => {

    const data = localStorage.getItem("logData")
    const loginData = JSON.parse(data)

    return (
        <View>
            {loginData?.role === "USER" ? <UserDashboard loginData={loginData} />
                : loginData?.role === "TECHNICIAN" ?
                    <TechnicianDashboard loginData={loginData} />
                    :
                    <LoginScreen />
            }
        </View>
    )
}

