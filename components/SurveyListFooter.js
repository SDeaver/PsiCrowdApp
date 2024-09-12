import { Text, View, Pressable, FlatList } from 'react-native';
import { allStyles } from '../styles/AllStyles';

export default function SurveyListFooter( { myList }) {

   function backToTop() {
      myList.current.scrollToOffset(0);
   }

   return(
      <View style={allStyles.surveyListFooter}>
         <Pressable style={allStyles.surveyListButton} onPress={backToTop} >
            <Text style={allStyles.surveyListButtonText}>BACK TO TOP</Text>
         </Pressable>
      </View>
   );      
}