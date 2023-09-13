
import React from 'react'
import { Image, Heading, Box ,VStack,Input,Button, View} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const LoginScreen = () => {
    const url="https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI"


    return (
        <Box flex={1} bg={"amber.100"} >
             <Box   justifyContent="center" >
            <Image source={{uri:url}} alt="image" mt={130}  w="full" h={24}  resizeMode="contain" />
            </Box>
            <Box w="full" h="full" position="absolute" top="20" px="6" justifyContent="center"  >
                <Heading style={{  alignItems: 'center',textAlign:'center' }}>Login</Heading>
                <VStack space={5} pt="6">
                      <Input InputLeftElement={<MaterialIcons name="email" size={20} color="black"  />} variant="outline" w="100%" pl={2}   placeholder='email@gmail.com' />
                      <Input type='password' InputLeftElement={<Ionicons name="eye" size={20} color="black" />} variant="outline" w="100%" pl={2}   placeholder='************' />
                      <View ><Button  mt={5} w="100%" rounded="50" bg="black" >Login</Button>
                      <Button my={10} w="100%" rounded="50">SIGN UP</Button>
                      </View>
                     
                </VStack>
            </Box>
        </Box>
    )
}
