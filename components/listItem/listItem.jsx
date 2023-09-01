import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'

const ListItem = ({ dish, navigation }) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <View>
                <Text style={styles.Item}>{dish.dish_name}</Text>
                <Text style={styles.price}>{dish.price}</Text>
            </View>
            <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.5}
                onPress={() =>
                    navigation.navigate('Details', {
                        dish: dish,
                    })
                }
            >
                <Text style={styles.btnText}>Details</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingLeft: 30,
        paddingRight: 20,
        margin: 10,
        width: '95%',
        height: '50%',
        borderRadius: 30,
        backgroundColor: 'white',
        shadowColor: '#171717',
        shadowOffset: { height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    Item: {
        width: '80%',
        fontSize: 20,
    },
    price: {
        fontSize: 16,
        color: '#f64f06',
    },
    btn: {
        width: '40%',
        height: '100%',
        backgroundColor: '#f64f06',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    btnText: {
        fontSize: 20,
        color: 'white',
    },
})

export default ListItem
