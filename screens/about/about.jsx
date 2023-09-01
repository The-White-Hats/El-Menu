import {  StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';


const About = ({navigation}) => {
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
            <View style = {styles.about}>
                <Text style={styles.text}>v0.1.0</Text>
                {secret}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    about: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 50, color: '#222222'
    },
    secretText:{
        fontSize: 15, color: '#222222'
    }
});
export default About;