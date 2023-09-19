import React from 'react'
import { Image,   View } from 'native-base'
import { StyleSheet } from 'react-native';
const Logo = () => {

    const url = "https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI"

  return (
    <View style={styles.container}>
    <Image mt={10} style={styles.roundedImage} source={{ uri: url }} alt="image" />
  </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    roundedImage: {
        // Adjust the width and height as needed
        width: 120,
        height: 120,
      
        marginBottom:60,
        borderRadius: 5, // Half of the width or height to create a circular border
    },
});