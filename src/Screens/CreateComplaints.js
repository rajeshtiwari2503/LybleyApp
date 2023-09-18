
import React, { useState } from 'react'
import { Box, Text, VStack, Image, ScrollView, View, Heading, Input } from 'native-base'
import { Button, StyleSheet } from 'react-native';
// import { DocumentPicker } from 'react-native-document-picker';


const CreateComplaints = () => {
 
  const url = "https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI"


  const selectedImage = async () => {
    try {
      const image = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log(image);
    }
    catch (err) {
      if (DocumentPicker.isCancel(e))
        console.log("dsg",e);
      else
        console.log(err);
    }
  }

  return (
    <ScrollView flex={1} bg={"amber.100"}>
      <Box flexWrap={"wrap"} >
        <Box w="full" h="full" px="6" justifyContent="center"  >
          <VStack space={2}  >
            <Image mt={20} style={styles.roundedImage} source={{ uri: url }} alt="image" />
            <View mt={5}>
              <Heading textAlign={"center"}> Create Complaint </Heading>

            </View>
            <Box flexWrap={"wrap"} bg={"white"} >

              <Box w="full" px="3" justifyContent="center"  >
                {/* <Heading   textAlign="center">Please tell us about your business</Heading> */}
                {/* <Heading style={{  alignItems: 'center',textAlign:'center' }}>Login</Heading> */}
                <VStack space={5} pt="5">
                  <Text style={{ fontWeight: "bold" }}>APPLIACES NAME</Text>
                  <Input variant="outline" w="100%" pl={2} name='servicerName' placeholder='Appliances Name' />
                  <Text style={{ fontWeight: "bold" }}>PART NAME</Text>
                  <Input variant="outline" w="100%" pl={2} name='servicerName' placeholder='Part Name' />
                  <Text style={{ fontWeight: "bold" }}>PART IMAGE</Text>
                  <Input variant="outline" w="100%" pl={2} name='servicerName' placeholder='Part Image' />
                  {/* <Button my={10} w="100%" title="Uploade Image" rounded="10" onPress={selectedImage} /> */}

                  <View pb={10}>

                    <Button my={10} w="100%" title="Create Complaint" rounded="10" bg="black" />
                  </View>

                </VStack>
              </Box>
            </Box>
          </VStack>
        </Box>
      </Box>
    </ScrollView>
  )
}

export default CreateComplaints;

const styles = StyleSheet.create({
  roundedImage: {
    // Adjust the width and height as needed
    width: "100%",
    height: 70,
    borderRadius: 10, // Half of the width or height to create a circular border
  },

});