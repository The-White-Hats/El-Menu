import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home/home';
import Menu from './screens/menu/menu';
import About from './screens/about/about';
import Search from './screens/search/search'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import {useState, useEffect} from 'react';




const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}



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
    
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
