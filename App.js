import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useState, useEffect} from 'react';
import * as Font from 'expo-font';

import Home from './screens/home/home';
import MenuNavigation from './MenuNavigation';
import About from './screens/about/about';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='MenuNavigation' component={MenuNavigation} />
      <Stack.Screen name='About' component={About} />
    </Stack.Navigator>
  );
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'dancing-script': require('./assets/fonts/DancingScript-VariableFont_wght.ttf'),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }
  
  return (
    <NavigationContainer independent={true}>
      <MyStack />
    </NavigationContainer>
  );
}
