import { Text, Pressable } from 'react-native';
import { allStyles } from '../styles/AllStyles';

export default function SurveyCard( { survey, modalOpen }) {

   function displaySurvey() {
      modalOpen(survey);
   }

   return(
      <Pressable style={allStyles.surveyCardContainer} onPress={displaySurvey}>
         <Text>{survey.name}</Text>
      </Pressable>
   );      
}