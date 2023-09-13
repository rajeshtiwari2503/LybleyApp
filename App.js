import React, { useCallback, useEffect, useState } from 'react';
import { NativeBaseProvider } from 'native-base';
import { Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { HomeScreen } from './src/Screens/HomeScreen';
 
export default function App() {
  // const [appIsReady, setAppIsReady] = useState(false);

  // useEffect(() => {
  //     async function prepare() {
  //         try {
  //             await Font.loadAsync(Entypo.font);
  //             await new Promise(resolve => setTimeout(resolve, 2000));
  //         } catch (e) {
  //             console.warn(e);
  //         } finally {
  //             setAppIsReady(true);
  //         }
  //     }

  //     prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //     if (appIsReady) {
  //         await SplashScreen.hideAsync();
  //     }
  // }, [appIsReady]);

  // if (!appIsReady) {
  //     return null;
  // }
  return (
    <NativeBaseProvider>
      {/* {appIsReady===true ?
            <View
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                onLayout={onLayoutRootView}>
                <Text>SplashScreen Demo! 👋</Text>
                <Entypo name="rocket" size={30} />
            </View>:
     <HomeScreen />} */}
     <HomeScreen />
    </NativeBaseProvider>
  );
}
