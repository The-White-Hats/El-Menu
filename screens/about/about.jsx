import {  StyleSheet, Text, View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';

import {restaurant_name, location} from './../../Menu.json'

const About = () => {
  const [click, setClick] = useState(0);
  const [secret, setSecret] = useState();

  useEffect(() => {
    if (click > 20) {
      setClick(0);
      setSecret(
        <View>
          <Text style= {styles.secretText} >بتضغط عليا ليييييييييييييييه منا مضغوط لوحدي 😢</Text>
        </View>
      );
    }
  }, [click]);

  return (
    <SafeAreaView style={styles.container} onTouchStart={() => setClick(click + 1)}>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
      <View style = {styles.about}>
        <Text style={styles.title}>{restaurant_name}</Text>
        <Text style={styles.text}>We serve the best food in town.</Text>

        <Text style={styles.title}><Entypo name="location-pin" size={20} color="black"/>Location</Text>
        <Text style={styles.text}>{location}</Text>

        <Text style={styles.title}><FontAwesome name="clock-o" size={20} color="black" /> Work Hours</Text>
        <Text style={styles.text}>We are open from 10am to 11pm every day.</Text>

        <Text style={styles.title}><FontAwesome name="phone" size={20} color="black" /> Phone</Text>
        <Text style={styles.text}> +20123456789</Text>

        <Text style={styles.title}>Follow Us on</Text>
        <View style={styles.social}>
          <FontAwesome name="instagram" size={20} color="gray" />
          <FontAwesome name="facebook-f" size={20} color="gray" />
          <FontAwesome name="twitter" size={20} color="gray" />
        </View>

        <Text style={styles.title}><Ionicons name="person" size={20} color="black" /> Contributors:</Text>
        <Text style={{...styles.text, color:"#c75300"}}>Ahmed Aladdin</Text>
        <Text style={{...styles.text, color:"#a84c00"}}>Ahmed Hamed</Text>
        <Text style={{...styles.text, color:"#8a4000"}}>Marwan Alhameedy</Text>
        <Text style={{...styles.text, color:"#6b3400"}}>Adham Hussin</Text>
        
        <Text style={styles.title}>Version</Text>
        <Text style={styles.text}>0.1.0</Text>
        {secret}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  about: {
    flex: 0,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15
  },
  text:{
    fontSize: 17,
    color: 'gray'
  },
  secretText:{
    fontSize: 15, color: '#222222'
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5
  }
});

export default About;