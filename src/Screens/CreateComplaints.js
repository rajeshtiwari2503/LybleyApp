
import React, { useState } from 'react'
import { Box, Text, VStack, Image, ScrollView, View, Heading, Input } from 'native-base'
import { Button, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const CreateComplaints = () => {

  const url = "https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI"
  const [selectedImage, setSelectedImage] = useState("");

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo', // specify media type (photo or video)
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setSelectedImage(source);
      }
    });

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

                  
                  <View pb={10}>
                    {/* <Button  mt={5} w="100%" rounded="50" bg="black" >Login</Button> */}
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