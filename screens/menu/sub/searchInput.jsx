import { TextInput, View, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

import colors from './../../../colors.json';

const SearchInput = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSubmit = (event, searchTerm) => {
    event.target.clear()
    navigation.navigate('Search', { searchTerm })
  };
  return (
    <View style={styles.searchBar}>
      <TextInput style={styles.searchInput} placeholder="Search"
        onSubmitEditing={(event) => handleSubmit(event, event.nativeEvent.text)}
        onChangeText={(text) => setSearchTerm(text)}
      />
      <Pressable style={styles.searchIconContainer} onPress={()=>navigation.navigate('Search', { searchTerm })}>
        <FontAwesome name="search" size={24} color="gray" />
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  }
});

export default SearchInput;
