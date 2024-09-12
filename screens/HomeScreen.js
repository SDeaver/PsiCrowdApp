import { Text, View, ImageBackground } from 'react-native';

import { allStyles } from '../styles/AllStyles';
import { imageList } from '../styles/ImageList'

export default function HomeScreen() {

   return(

      <ImageBackground source={imageList.bg} style={allStyles.containerHome} imageStyle={allStyles.backgroundImg}>
            <View style={allStyles.titleViewHome}>
               <Text style={allStyles.titleHome} >Latest Psychic Surveys</Text>
            </View>
      </ImageBackground>

   );
}