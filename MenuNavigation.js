import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native'

import Menu from './screens/menu/menu';
import Search from './screens/search/search';
import Details from './screens/details/details';
import colors from "./colors.json"
const Stack = createStackNavigator();

const MenuNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name='Menu' component={Menu} options={{headerShown: false}}/>
        <Stack.Screen name='Search' component={Search} options={styles}/>
        <Stack.Screen name='Details' component={Details} options={styles}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  presentation: 'modal',
  headerTitleStyle: {
    fontWeight: 200,
    fontFamily: 'dancing-script',
    fontSize: 35,
    color: 'white',
  },
  headerLeft: ()=> null,
  headerTitleAlign: 'center',
  headerStyle : {
    backgroundColor:colors.primary
  }
});

export default MenuNavigation;