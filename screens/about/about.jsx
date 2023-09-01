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
                <Text style={styles.text}>La Perle:</Text>
                <Text style={styles.text}>A restaurant in the heart of the city of Alexandria, Egypt.</Text>
                <Text style={styles.text}>We serve the best food in town.</Text>
                <Text style={styles.text}>We are open from 10am to 11pm every day.</Text>
                <Text style={styles.text}>Contact us on +20123456789</Text>
                <Text style={styles.text}>Find us on Google Maps</Text>
                <Text style={styles.text}>Follow us on Instagram</Text>
                <Text style={styles.text}>Follow us on Facebook</Text>
                <Text style={styles.text}>Follow us on Twitter</Text>
                <Text style={{...styles.text,marginTop:10}}>Contributors:</Text>
                <Text style={{...styles.text,color:"#c75300",marginTop:10}}>Ahmed Alaa</Text>
                <Text style={{...styles.text,color:"#a84c00"}}>Ahmed Hamed</Text>
                <Text style={{...styles.text,color:"#8a4000"}}>Marwan Alhameedy</Text>
                <Text style={{...styles.text,color:"#6b3400",marginBottom:10}}>Adham Hussin</Text>
                <Text style={styles.text}>v0.1.0</Text>
                {secret}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
    },
    about: {
        flex: 0,
        marginLeft: 10,
    },
    text:{
        fontSize: 20, color: '#222222'
    },
    secretText:{
        fontSize: 15, color: '#222222'
    }
});
export default About;