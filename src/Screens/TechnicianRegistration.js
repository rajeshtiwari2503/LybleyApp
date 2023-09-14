
import React,{useState} from 'react'
import { Image,Text, Heading, Box ,VStack,Input,Button, View, ScrollView, Flex} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import httpCommon from '../../http-common';

const TechnicianRegistration = () => {
    const url="https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI"
     const navigation=useNavigation();
    const [formData,setFormData]=useState({
        servicerName:"",
        businessPhone:"",
        businessAddress:"",
        yearOfStartBusniess:"",
        servicerWebsite:"",
        betterBusinessBureauReviewPage:"",
      });
    
      const registration = async () => {
        try {
          console.log(formData);
          let response = await httpCommon.post("/servicerRegistration",{...formData,businessPhone:+formData?.businessPhone});
          let { data } = response;
          navigation.navigate("Login");
        } catch (err) {
          console.log(err);
        }
      }
       
      const handleChange=(name,value)=>{
         setFormData({...formData,[name]:value});
    }

    return (
        <ScrollView flex={1}>
             <Flex >
        <Box  flexWrap={"wrap"} bg={"white"} >
        
            <Box w="full" h="full" top="10" px="6" justifyContent="center"  >
            <Heading mt={10} textAlign="center">Please tell us about your business</Heading>
                {/* <Heading style={{  alignItems: 'center',textAlign:'center' }}>Login</Heading> */}
                <VStack space={5} pt="5">
                      <Text style={{fontWeight:"bold"}}>SERVICER NAME</Text>
                      <Input variant="outline" w="100%" pl={2} name='servicerName' value={formData.servicerName}   placeholder='Servicer Name' onChangeText={(text)=>handleChange("servicerName",text)}/>
                      <Text style={{fontWeight:"bold"}}>BUSINESS PHONE</Text>
                      <Input type='text' variant="outline" w="100%" pl={2} name='businessPhone' value={formData.businessPhone}  placeholder="Business Phone" onChangeText={(text)=>handleChange("businessPhone",text)}/>
                      <Text style={{fontWeight:"bold"}}>BUSINESS ADDRESS</Text>
                      <Input type='text' variant="outline" w="100%" pl={2} name='businessAddress' value={formData.businessAddress}  placeholder="Business Address" onChangeText={(text)=>handleChange("businessAddress",text)}/>
                      <Text style={{fontWeight:"bold"}}>YEAR OF STARTING THE BUSINESS</Text>
                      <Input type='date' variant="outline" w="100%" pl={2} name="yearOfStartBusniess" value={formData.yearOfStartBusniess}   placeholder="Year" onChangeText={(text)=>handleChange("yearOfStartBusniess",text)}/>
                      <Text style={{fontWeight:"bold"}}>SERVICER WEBSITE(OPTIONAL)</Text>
                      <Input type='text' variant="outline" w="100%" pl={2} name='servicerWebsite' value={formData.servicerWebsite}  placeholder="Servicer Website(Optional)" onChangeText={(text)=>handleChange("servicerWebsite",text)}/>
                      <Text style={{fontWeight:"bold"}}>YELP OR BETTER BUSINESS BUREAU REVIEW PAGE (OPTIONAL)</Text>
                      <Input type='text' variant="outline" w="100%" pl={2} name='betterBusinessBureauReviewPage' value={formData.betterBusinessBureauReviewPage}  placeholder="Yelp or Better Business Bureau Review Page (Optional)" onChangeText={(text)=>handleChange("betterBusinessBureauReviewPage",text)}/>
                      <View pb={10}>
                        {/* <Button  mt={5} w="100%" rounded="50" bg="black" >Login</Button> */}
                      <Button my={10} w="100%" rounded="50" onPress={registration}>SIGN UP</Button>
                      </View>
                     
                </VStack>
            </Box>
        </Box>
        </Flex>
        </ScrollView>
    )
}
export default TechnicianRegistration;