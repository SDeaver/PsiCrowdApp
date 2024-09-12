import { Text, View, ImageBackground } from 'react-native';

import { allStyles } from '../styles/AllStyles';
import { imageList } from '../styles/ImageList'

export default function FAQScreen() {

   return(

      <ImageBackground source={imageList.bg} style={allStyles.containerMain} imageStyle={allStyles.backgroundImg}>
            <Text style={allStyles.bodyText} >FAQ Screen</Text>
      </ImageBackground>

   );
}