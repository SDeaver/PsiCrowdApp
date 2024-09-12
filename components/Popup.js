import { Pressable, View, Text } from 'react-native';

import { allStyles } from '../styles/AllStyles.js';



export default function Popup({ modalClose, survey }) {

   return(
      <Pressable style={ allStyles.modalContainer } onPress={ modalClose }>
         <Pressable style= { allStyles.surveyContainer}>
            
            <Pressable style={ allStyles.modalXbutton } onPress={( modalClose )}>
               <Text>X</Text>
            </Pressable>
            
            <Text style={allStyles.surveyHeader}>{survey.name}</Text>

            {/* <View>
               <Text style={ allStyles.surveyHeader }>{FAQtext[0].heading}</Text>
               <Text style={ allStyles.surveyBody }>{FAQtext[0].body}</Text>
            </View> */}

         </Pressable>
      </Pressable>
   )

}