
import React, { useState } from 'react'
import { Box, Text, VStack, Image, ScrollView, View, Heading, Input } from 'native-base'
import { Button, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import {ImagePicker} from 'react-native-image-picker';
import httpCommon from '../../http-common';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateComplaints = () => {
  const [formData,setFormData]=useState({
    userId:"",
    applianceName:"",
    partName:"",
    description:"",
    image:"https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI"
  })
// import { DocumentPicker } from 'react-native-document-picker';


const CreateComplaints = () => {
 

  const url = "https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI"


  // const openImagePicker = () => {
  //   const options = {
  //     mediaType: 'photo', // specify media type (photo or video)
  //   };

  //   launchImageLibrary(options, (response) => {
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else {
  //       const source = { uri: response.uri };
  //       setSelectedImage(source);
  //     }
  //   });

  // }

  const [imageSource, setImageSource] = useState(null);

  const selectImage = () => {
    ImagePicker.showImagePicker(
      {
        title: 'Select Image',
        mediaType: 'photo',
        quality: 0.5,
      },
      (response) => {
        if (!response.didCancel && !response.error) {
          setImageSource({ uri: response.uri });
        }
      }
    );
  };

  const complaint = async () => {
    try {
      const value = await AsyncStorage.getItem("logData");
      const loginData= JSON.parse(value);
      let response = await  httpCommon.post("/createComplaint",{...formData,userId:loginData?._id});
      let { data } = response;
      // navigation.navigate("Login");
    } catch (err) {
      console.log(err);

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

  const handleChange=(name,value)=>{
    setFormData({...formData,[name]:value});
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
                  <Input variant="outline" w="100%" pl={2} name='servicerName' value={formData.applianceName} placeholder='Appliances Name' onChangeText={(text)=>handleChange("applianceName",text)} />
                  <Text style={{ fontWeight: "bold" }}>PART NAME</Text>
                  <Input variant="outline" w="100%" pl={2} name='servicerName' value={formData.partName} placeholder='Part Name' onChangeText={(text)=>handleChange("partName",text)} />
                  <Text style={{ fontWeight: "bold" }}>PART IMAGE</Text>
                  <Input variant="outline" w="100%" pl={2} name='servicerName' value={formData.description} placeholder='Part Image' onChangeText={(text)=>handleChange("description",text)} />

                  <View>
                   {imageSource && <Image source={imageSource} style={{ width: 200, height: 200 }} />}
                  <Button title="Select Image" onPress={selectImage} />
                   </View>
                  <View pb={10}>
                    {/* <Button  mt={5} w="100%" rounded="50" bg="black" >Login</Button> */}
                    <Button my={10} w="100%" title="Create Complaint" rounded="10" bg="black" onPress={complaint} />
//                   <Input variant="outline" w="100%" pl={2} name='servicerName' placeholder='Part Image' />
                  {/* <Button my={10} w="100%" title="Uploade Image" rounded="10" onPress={selectedImage} /> */}

                  <View pb={10}>

//                     <Button my={10} w="100%" title="Create Complaint" rounded="10" bg="black" />
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