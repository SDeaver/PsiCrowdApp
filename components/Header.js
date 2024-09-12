import { View, Text } from 'react-native';

import { allStyles } from '../styles/AllStyles';
import { FAQIcon } from '../components/Icons';

export default function Header( { navigation }) {

   return (
      <View style={allStyles.headerMain}>

         <View style={ allStyles.headerIconView } >
            {/* placeholder view */}
         </View>
         
         <View style={ allStyles.headerTitleView}>
            <Text style={allStyles.headerTitle}>PsiCrowd</Text>
         </View>

         <View style={ allStyles.headerIconView }>
            <FAQIcon navigation={navigation}/>
         </View>

      </View>
   );

}