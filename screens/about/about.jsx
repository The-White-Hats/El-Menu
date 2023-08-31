import {  StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Button } from 'react-native';


const About = ({navigation}) => {
    return (
        <View >
            <View>
                <Text>About</Text>
            </View>
            <View >
                <Text>This is the About screen</Text>
            </View>
            <View >
                <View >
                    <Button title="Menu" onPress={() => navigation.navigate('Menu')} />
                </View>
                <View>
                    <Button title="About" onPress={() => navigation.navigate('About')} />
                </View>
            </View>
        </View>
    );
}

export default About;