/*
Author: Adham Hussin
Description: Home screen component for react-native application
Functionality:
- Display the home screen
- Redirect to Menus screen when the user clicks on the menu button
- Redirect to about screen when the user clicks on the about button
*/
import {  StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Button, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';




const Home = ({navigation}) => {
    //use safe area view to avoid the notch
    return (
        <ImageBackground
        source={require('../../assets/dishes.jpeg')}
        style={{width: '100%', height: '100%'}}
      >
        <LinearGradient
            colors={['#f76001cc', '#f13902ee', '#fb0d05']}
            style={styles.container}
        >
        <View style={styles.header}>
            <Text style={styles.headerText}>La Perle</Text>
        </View>
        <View style={styles.body}>
            <Button style= {styles.button} title="Menu" onPress={() => navigation.navigate('Menu')} />
            <Button style= {styles.button} title="About" onPress={() => navigation.navigate('About')} />
        </View>
        </LinearGradient>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: 'Roboto',
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        margin: 10,
        padding: 10,
        
    },
});

export default Home;

