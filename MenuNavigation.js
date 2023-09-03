import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native'

import Menu from './screens/menu/menu';
import Search from './screens/search/search';
import Details from './screens/details/details';

const Stack = createStackNavigator();

const MenuNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Menu' component={Menu}/>
        <Stack.Screen name='Search' component={Search} options={styles}/>
        <Stack.Screen name='Details' component={Details} options={styles}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  presentation: 'modal',
  headerShown: true,
  headerTitleStyle: {
    fontWeight: 'bold'
  },
  headerLeft: ()=> null,
  headerTitleAlign: 'center'
})

export default MenuNavigation;