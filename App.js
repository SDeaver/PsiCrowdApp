//import * as React from 'react';

import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { allStyles } from './styles/AllStyles';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import Header from './components/Header';
import { HomeIcon, UserIcon } from './components/Icons';

const Tab = createBottomTabNavigator();


export default function App() {

  return (

      <NavigationContainer>
         <Tab.Navigator
            initialRouteName='Home'
            screenOptions={
               {
                  tabBarShowLabel: false,
                  tabBarStyle: allStyles.tabBarMain,
                  header: ({ navigation, route, options })=> { return (<Header/>) }
               }
            }
         >
            <Tab.Screen
               name="Home"
               component={HomeScreen}
               options={
                  { tabBarIcon: ()=> { return (<HomeIcon/>) } }
               }
            />
            <Tab.Screen
               name="User"
               component={UserScreen}
               options={
                  { tabBarIcon: ()=> { return (<UserIcon/>) } }
               }
            />
         </Tab.Navigator>
      </NavigationContainer>
      
  );

}