import { Pressable, View, Text } from 'react-native';

import { allStyles } from '../styles/AllStyles';

import { FAQtext } from '../assets/text/FAQtext.js';


export default function FAQPopup({ faqClose }) {

   return(
      <Pressable style={ allStyles.modalContainer } onPress={ faqClose }>
         <Pressable style= { allStyles.faqContainer}>
            
            <Pressable style={ allStyles.faqXbutton } onPress={( faqClose )}>
               <Text>X</Text>
            </Pressable>
            
            {/* <Text>FAQ</Text> */}

            <View>
               <Text style={ allStyles.faqHeader }>{FAQtext[0].heading}</Text>
               <Text style={ allStyles.faqBody }>{FAQtext[0].body}</Text>
            </View>

         </Pressable>
      </Pressable>
   )

}