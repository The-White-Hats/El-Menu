import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './screens/menu/menu';
import Search from './screens/search/search';
import Details from './screens/details/details';

const Stack = createStackNavigator();

const MenuNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Menu' component={Menu}/>
        <Stack.Screen name='Search' component={Search}/>
        <Stack.Screen name='Details' component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MenuNavigation;