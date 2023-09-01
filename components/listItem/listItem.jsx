import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const ListItem = ({ dish, navigation }) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <View style={{width: '60%'}}>
                <Text style={styles.Item}>{dish.dish_name}</Text>
                <Text style={styles.price}>{dish.price}€</Text>
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
<<<<<<< HEAD
        padding: 20,
        paddingLeft: 30,
        margin: 10,
        width: '95%',
        height: '25%',
=======
        paddingVertical: 15,
        paddingLeft: 20,
        paddingRight: 20,
        width: '95%',
        marginBottom: 10,
>>>>>>> 9f57008c04f213e690e519b9f5738a3d849b920e
        borderRadius: 30,
        backgroundColor: 'white',
        shadowColor: '#171717',
        shadowOffset: { height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    Item: {
<<<<<<< HEAD
        width: '100%',
        fontSize: 20,
=======
        fontSize: 18,
>>>>>>> 9f57008c04f213e690e519b9f5738a3d849b920e
    },
    price: {
        fontSize: 16,
        color: '#f64f06',
    },
    btn: {
        width: '40%',
        height: 50,
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
