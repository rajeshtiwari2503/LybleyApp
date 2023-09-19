import { Box, Text, VStack, Image, ScrollView, View, Heading,  Flex  } from 'native-base'
import React, { useEffect, useState } from 'react'
import httpCommon from '../../http-common';
import { useRoute } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const Complaint = () => {
  const [complaint, setComplaint] = useState([]);
  
  const route = useRoute();
  const { id } = route.params;

  const getComplaints = async () => {
    try {
      let response = await httpCommon.get(`/getComplaintByUser/${id}`);
      let { data } = response;
      setComplaint(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(()=>{
    getComplaints()
  },[])


  const url = "https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI"

  return (
    <ScrollView flex={1} bg={"amber.100"}>
      <Box flexWrap={"wrap"} >
        <Box w="full" h="full" px="6" justifyContent="center"  >
          <VStack space={2}  >
          <View style={styles.container}> <Image mt={10} style={styles.roundedImage} source={{ uri: url }} alt="image" /></View>
            <View mt={5}>
              <Heading textAlign={"center"}>  Complaints </Heading>
            </View>
            
            <Flex mt={5} direction='row' flexWrap={"wrap"} alignItems="center" justifyContent="start">
             {complaint?.map((item,i)=>
              <View style={{padding:"10px", flex: 1, flexDirection: 'row', justifyContent: 'space-between',backgroundColor:"white" }} key={i}>
                <Text>{i+1}</Text>
                <Text>{item?.applianceName}</Text>
                <Text>{item?.partName}</Text>
                <Text>{item?.applianceName}</Text>
                <Text>{item?.description}</Text>
                <Text>{new Date(item?.createdAt).toDateString()}</Text>
              </View>
              )}
            </Flex>
             
            
          </VStack>
        </Box>
      </Box>
    </ScrollView>
  )
}

export default Complaint;

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
} 
});