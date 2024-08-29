import { StyleSheet } from 'react-native';


export const colors = {
   brand_01: 'pink',
   brand_02: 'blue',
}


export const allStyles = StyleSheet.create ({
   mainContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      backgroundColor: colors.brand_01,
   },
   yearBreak: {
      height: 2,
      width: '80%',
      alignSelf: 'center',
      marginTop: 30,
      marginBottom: 20,
      backgroundColor: colors.text,
   },
   tabBarMainStyle: {
      backgroundColor: colors.brand_02,
   }
})