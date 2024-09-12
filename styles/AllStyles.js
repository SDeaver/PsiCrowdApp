import { StyleSheet } from 'react-native';


export const colors = {
   brand_01: '#2B6CA3',
   brand_01A: 'rgba(43,108,163,0.15)',
   brand_01B: 'rgba(43,108,163,0.4)',
   brand_02: '#F8F8FF',
   transparent: 'rgba(0,0,0,0)',
}

export const surveyListGradientColors = [colors.transparent, colors.brand_01B]


export const allFonts = {
   fontMain: require('../assets/fonts/AvenirLTStd-Medium.otf')
}

export const allStyles = StyleSheet.create ({

   containerMain: {
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
   iconMain: {
      color: colors.brand_02,
   },
   bodyText: {
      fontFamily: 'fontMain',
      fontSize: 36,
      color: colors.brand_01,
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


   homeContainer: {
      alignItems: 'center',
      //justifyContent: 'center',
      height: '100%',
      backgroundColor: colors.brand_02,
   },   
   homeTitle: {
      fontFamily: 'fontMain',
      fontSize: 24,
      color: colors.brand_01,
      paddingTop: '5%',     
   },
   homeTitleView: {
      height: '12%',
      justifyContent: 'center',
   },
   surveyListContainer: {
      width: '88%',
      height: '84%',
      borderWidth: 1,
      borderColor: colors.brand_01,
      backgroundColor: colors.brand_01A,
   },
   surveyList: {
      paddingTop: '5%',
   },
   surveyCardContainer: {
      backgroundColor: colors.brand_02,
      borderWidth: 1,
      borderColor: colors.brand_01,
      width: '90%',
      padding: '5%',
      marginHorizontal: '5%',
      marginVertical: '2%',
   },
   surveyListGradient:
   {
      bottom: 0,
      position: 'absolute',
      height: '40%',
      width: '100%'
   },
   surveyListFooter:
   {
      width: '100%',
      height: 500,
   },
   surveyListButton: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '10%',
      backgroundColor: colors.brand_01,
      width: '35%',
      height: '8%',
   },
   surveyListButtonText: {
      fontFamily: 'fontMain',
      fontSize: 14,
      color: colors.brand_02,
   },

   modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
   },
   surveyContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth:2,
      borderColor: colors.brand_01,
      height: '100%',
      width: '100%',
      backgroundColor: colors.brand_02,
   },
   modalXbutton: {
      position: 'absolute',
      right: 10,
      top: 10,
   },
   surveyHeader: {
      fontFamily: 'fontMain',
      fontSize: 18,
      color: colors.brand_01,
   },
   surveyBody: {
      fontFamily: 'fontMain',
      fontSize: 16,
   }
})