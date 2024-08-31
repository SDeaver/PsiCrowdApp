import { StyleSheet } from 'react-native';


export const colors = {
   brand_01: '#2B6CA3',
   brand_02: '#F8F8FF',
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
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 70,
      width: '100%',
      paddingTop: 30,
      backgroundColor: colors.brand_01,
   },
   headerTitleView: {
      //backgroundColor: 'purple',
   },
   headerIconView: {
      alignItems: 'center',
      width:60,
      //backgroundColor: 'red',
      color: colors.brand_02,
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
   },
   iconMain: {
      color: colors.brand_02,
   },
   modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
   },
   faqContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth:2,
      borderColor: colors.brand_01,
      height: '70%',
      width: '80%',
      backgroundColor: colors.brand_02,
   },
   faqXbutton: {
      position: 'absolute',
      right: 10,
      top: 10,
   },
   faqHeader: {
      fontFamily: 'fontMain',
      fontSize: 18,
      color: colors.brand_01,
   },
   faqBody: {
      fontFamily: 'fontMain',
      fontSize: 16,
      
   }
})