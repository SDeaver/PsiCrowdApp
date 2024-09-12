import { useRef, useState } from 'react';
import { Text, View, ImageBackground, FlatList, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { allStyles, surveyListGradientColors } from '../styles/AllStyles';
import { imageList } from '../styles/ImageList'
import { testData } from '../assets/data/TestData';

import SurveyCard from '../components/SurveyCard'
import SurveyListFooter from '../components/SurveyListFooter'
import Popup from '../components/Popup';

export default function HomeScreen() {

   const surveyListRef = useRef(null);
   const [modalVisible, setModalVisible] = useState(false);
   const [modalContent, setModalContent] = useState(null);

   function modalOpen(content) {
      setModalContent(content);
      setModalVisible(true);
   }

   function modalClose() {
      setModalVisible(false);
   }

   function displaySurveyCard(item){

      return (
         <SurveyCard survey={item} modalOpen={modalOpen}/>
      );
   }

   // function backToTop() {
   //    surveyListRef.current.scrollToOffset(0);
   // }

   return(

      <ImageBackground source={imageList.bg} style={allStyles.homeContainer} imageStyle={allStyles.backgroundImg}>
 
         <Modal visible={modalVisible} animationType='fade' transparent={true}>
            <Popup modalClose={modalClose} survey={modalContent}/>
         </Modal>

         <View style={allStyles.homeTitleView}>
            <Text style={allStyles.homeTitle} >Latest Psychic Surveys</Text>
            </View>

         <View style={allStyles.surveyListContainer}>
            <FlatList
               ref={surveyListRef}
               data={testData}
               style={allStyles.surveyList}
               renderItem={({ item }) => displaySurveyCard(item) }
               ListFooterComponent={ <SurveyListFooter myList={surveyListRef} /> }
            />

            <LinearGradient
               colors={surveyListGradientColors}
               style={allStyles.surveyListGradient}
               pointerEvents='none'
            />

         </View>

      </ImageBackground>

   );
}