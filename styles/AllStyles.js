import { StyleSheet } from 'react-native';


export const colors = {
   brand_01: 'lightblue',
   brand_02: 'ghostwhite',
}


export const allStyles = StyleSheet.create ({
   mainContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      backgroundColor: colors.brand_02,
   },
   yearBreak: {
      height: 2,
      width: '80%',
      alignSelf: 'center',
      marginTop: 30,
      marginBottom: 20,
      backgroundColor: colors.text,
   },
   tabBarMain: {
      backgroundColor: colors.brand_01,
   },
   headerMain: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: '100%',
      backgroundColor: colors.brand_01,
   },
   headerTitle: {
      color: colors.brand_02,
   }

})