import { StyleSheet } from 'react-native';


export const colors = {
   brand_01: 'steelblue',
   brand_02: 'ghostwhite',
}

export const allFonts = {
   fontMain: require('../assets/fonts/AvenirLTStd-Medium.otf')
}

export const allStyles = StyleSheet.create ({
   mainContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      backgroundColor: colors.brand_02,
   },
   backgroundImg: {
      opacity: 0.05,
      resizeMode: 'center',
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
      fontFamily: 'fontMain',
      fontSize: 18,
      color: colors.brand_02,
   },
   bodyText: {
      fontFamily: 'fontMain',
      fontSize: 36,
      color: colors.brand_01,
   }

})