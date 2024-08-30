import { Text, View, ImageBackground } from 'react-native';

import { allStyles } from '../styles/AllStyles';
import { imageList } from '../styles/ImageList'

export default function UserScreen() {

   return(

      <ImageBackground source={imageList.bg} style={allStyles.mainContainer} imageStyle={allStyles.backgroundImg}>
            <Text style={allStyles.bodyText} >User Screen</Text>
      </ImageBackground>
      
   );
}