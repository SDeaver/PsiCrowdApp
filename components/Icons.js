import { Text, Pressable } from 'react-native';

import { allStyles } from '../styles/AllStyles';

export function HomeIcon() {

   return(
      <Text style={ allStyles.iconMain }>x</Text>
   )

}

export function UserIcon() {

   return(
      <Text style={ allStyles.iconMain }>o</Text>
   )

}

export function SettingsIcon() {

   return(
      <Text style={ allStyles.iconMain }>+</Text>
   )   

}



export function FAQIcon( { navigation } ) {

   function navToFAQ() {
      navigation.navigate('FAQ');
   }

   return(
      <Pressable hitSlop={10} onPress={ navToFAQ } >
         <Text style={ allStyles.iconMain }>?</Text>
      </Pressable>
   )

}