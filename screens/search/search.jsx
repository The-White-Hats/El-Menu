import { TextInput, View, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import ListItem from '../../components/listItem/listItem';
const menu = require('../../Menu.json');
import colors from './../../colors.json';

const Search = ({ route, navigation }) => {
  const { searchTerm } = route.params
  const [SearchTerm, setSearchTerm] = useState(searchTerm)
  const menuArr = menu.menu_sections
  return (
    <SafeAreaView style={styles.searchScreen}>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="Search" onChangeText={(newText) => setSearchTerm(newText)} defaultValue={SearchTerm} />
          <View style={styles.searchIconContainer}>
            <FontAwesome name="search" size={24} color="gray" />
          </View>
      </View>
      <ScrollView contentContainerStyle={styles.ItemsContainer}>
        {SearchTerm &&
          menuArr.map((section) => {
            return section.dishes.map((dish, index) => {
              return (
                dish.dish_name
                  .toLowerCase()
                  .startsWith(
                    String(SearchTerm).toLowerCase()
                  ) && (
                  <ListItem
                    key={index}
                    dish={dish}
                    navigation={navigation}
                  />
                )
              )
            })
          })}
      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  searchScreen: {
    backgroundColor: 'white',
    flex: 1
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    width: 300,
    backgroundColor: colors.gray,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingLeft: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray,
    width: 40,
    paddingRight: 9,
    height: 40,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  ItemsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Search;
