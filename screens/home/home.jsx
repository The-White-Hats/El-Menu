/*
Author: Adham Hussin
Description: Home screen component for react-native application
Functionality:
- Display the home screen
- Redirect to Menus screen when the user clicks on the menu button
- Redirect to about screen when the user clicks on the about button
*/
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Button, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import React from 'react';




const Home = ({ navigation }) => {
    <StatusBar backgroundColor="#000000" barStyle="light-content"/>
    return (
        <SafeAreaView>
            <ImageBackground
                source={require('../../assets/dishes.jpeg')}
                style={{ width: '100%', height: '100%' }}
            >
                <LinearGradient
                    colors={['#f76001cc', '#f13902ee', '#fb0d05']}
                    style={styles.container}
                >
                    <View style={styles.header}>
                        <Text style={styles.headerText}>La Perle</Text>
                    </View>
                    <View style={styles.body}>
                        <TouchableOpacity style={{ ...styles.button, backgroundColor: "#ffffff" }} onPress={() => navigation.navigate('Menu')}>
                            <Text style={styles.buttonText}>L'exquis Menu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
                            <Text style={styles.buttonText}>About</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 8,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 60,
        fontFamily: 'dancing-script',
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 150,
    },
    button: {
        width: 250,
        height: 80,
        margin: 10,
        paddingBottom: 10,
        backgroundColor: '#ffffff00',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 2,

    },
    touched: {
        backgroundColor: '#fff',
    },
    buttonText: {
        color: '#000',
        fontSize: 35,
        fontFamily: 'dancing-script',
    },
});

export default Home;

