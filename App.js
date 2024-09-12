
import React, { useState, useEffect } from 'react';
//import { Modal } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { allStyles, allFonts } from './styles/AllStyles';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import SettingsScreen from './screens/SettingsScreen';
import FAQScreen from './screens/FAQScreen'
import Header from './components/Header';
//import FAQPopup from './components/FAQPopup'
import { HomeIcon, UserIcon, SettingsIcon } from './components/Icons';


const Tab = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync();


export default function App() {

   //const [modalVisible, setModalVisible] = useState(false);


   // font loading

   const [fontsLoaded, fontsError] = useFonts({
      'fontMain': allFonts.fontMain,
      });

      useEffect(() => {
      if (fontsLoaded || fontsError) {
         SplashScreen.hideAsync();
      }
      }, [fontsLoaded, fontsError]);

      if (!fontsLoaded && !fontsError) {
      return null;
      }


   // function faqOpen() {
   //    setModalVisible(true);
   // }

   // function faqClose() {
   //    setModalVisible(false);
   // }

   return (

      <NavigationContainer>

         {/* <Modal visible={modalVisible} animationType='fade' transparent={true}>
            < FAQPopup faqClose={faqClose} />
         </Modal> */}

         <Tab.Navigator
            initialRouteName='Home'
            screenOptions={
               {
                  tabBarShowLabel: false,
                  tabBarStyle: allStyles.tabBarMain,
                  header: ({ navigation, route, options })=> { return (<Header navigation={navigation} />) }
               }
            }
         >
            <Tab.Screen
               name="User"
               component={UserScreen}
               options={
                  { tabBarIcon: ()=> { return (<UserIcon/>) } }
               }
            />
            <Tab.Screen
               name="Home"
               component={HomeScreen}
               options={
                  { tabBarIcon: ()=> { return (<HomeIcon/>) } }
               }
            />
            <Tab.Screen
               name="Settings"
               component={SettingsScreen}
               options={
                  { tabBarIcon: ()=> { return (<SettingsIcon/>) } }
               }
            />
            <Tab.Screen
               name="FAQ"
               component={FAQScreen}
               options={
                  {
                     tabBarButton: () => null,
                     tabBarIcon: () => null,
                     tabBarVisible: false
                  }
               }
            />


         </Tab.Navigator>
      </NavigationContainer>
      
  );

}