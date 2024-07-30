
import { StyleSheet, Text, View, SafeAreaView, Systrace } from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState, useCallback } from 'react';
import Onboarding from './src/screen/Onboarding';
import LoginScreen from './src/screen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ThirdPage from './src/screen/thirdpage';
import Deposit from './src/screen/Deposit';
import Dashboard from './src/screen/Dashboard';
import LoginInterface from './src/screen/LoginInterface';
import Boarding from './src/screen/Boarding';
import Lession from './src/screen/lession';


function App() {
  const [fontsLoaded] = useFonts({
    "gilroy-regular": require("./assets/GilroyFont/Gilroy-Regular.ttf"),
    "gilroy-bold": require("./assets/GilroyFont/Gilroy-Bold.ttf")
    // "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    // "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    // "roboto-light": require("./assets/fonts/Roboto-Light.ttf"),
    // "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
    // "roboto-italic": require("./assets/fonts/Roboto-Italic.ttf"),
    // "roboto-thin": require("./assets/fonts/Roboto-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    try {
      if (fontsLoaded) {
        // Perform any additional setup or async operations here

        // Hide the splash screen
        await SplashScreen.hideAsync();
      }
    } catch (e) {
      console.error("Error hiding splash screen:", e);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const Stack = createNativeStackNavigator()

  return (
    // <Lession/>

    // <Boarding/>
    // <LoginInterface/>
    // <Dashboard/>
      <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{headerShown: false}} name="Boarding" component={Boarding}/> 
       <Stack.Screen options={{headerShown: false}} name="LoginInterface" component={LoginInterface}/> 
         <Stack.Screen options={{headerShown:false}} name="Dashboard" component={Dashboard}/> 
        {/* <Stack.Screen  options={{headerShown: false}}  name="Onboarding" component={Onboarding}/>
         <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen}/> 
          <Stack.Screen options={{headerShown: false}} name="thirdpage" component={ThirdPage}/>
         <Stack.Screen options={{headerShown: false}} name="deposit" component={Deposit}/> */}
       </Stack.Navigator>
     </NavigationContainer>

  );
}

{}
export default App