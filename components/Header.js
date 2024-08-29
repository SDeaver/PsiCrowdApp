import { View, Text } from 'react-native';

import { allStyles } from '../styles/AllStyles';

export default function Header() {

   return (
      <View style={allStyles.headerMain}>
         <Text style={allStyles.headerTitle}>PsiCrowd</Text>
      </View>
   );

}