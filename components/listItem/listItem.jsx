import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import colors from './../../colors.json';

const ListItem = ({ dish, navigation }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <View style={{ width: '60%' }}>
        <Text style={styles.Item}>{dish.dish_name}</Text>
        <Text style={styles.price}>{dish.price} €</Text>
      </View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.5} 
        onPress={() => navigation.navigate('Details', { dish })}>
        <Text style={styles.btnText}>Details</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingLeft: 20,
    paddingRight: 20,
    width: '95%',
    marginVertical: 7,
    borderRadius: 20,
    backgroundColor: colors.gray,
    shadowColor: '#171717',
    shadowOffset: { height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  Item: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  price: {
    fontWeight: 'bold',
    fontSize: 17,
    color: colors.primary,
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
  }
});

export default ListItem;
