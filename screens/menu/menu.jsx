import {  StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Button } from 'react-native';
import ListItem from '../../components/listItem/listItem';
const menu = require('../../Menu.json')


const Menu = ({navigation}) => {
    return (
        <View >
            <View>
                <Text>About</Text>
            </View>
            <View >
                <Text>This is the Menu screen</Text>
            </View>
            <View >
                <View >
                    <Button title="Menu" onPress={() => navigation.navigate('Menu')} />
                </View>
                <View>
                    <Button title="About" onPress={() => navigation.navigate('About')} />
                </View>
                <View>
                    <ListItem dish={menu.menu_sections[0].dishes[1]}/>
                </View>
            </View>
        </View>
    );
}
export default Menu;