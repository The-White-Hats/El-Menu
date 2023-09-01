import { TextInput, View, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';



const SearchInput = () => {
  return (
      <View style={styles.searchBar}>
          <TextInput style={styles.searchInput} placeholder="Search"/>
          <View style={styles.searchIconContainer}><FontAwesome name="search" size={24} color="gray" /></View>
      </View>
  );
};

const styles = StyleSheet.create({
  
  searchBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
      height: 40,
      width: 300,
      backgroundColor: "white",
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      paddingLeft: 16,
      fontSize: 18,
      fontWeight: "bold"
  },
  searchIconContainer: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      width: 40,
      paddingRight: 9,
      height: 40,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
  }
});

export default SearchInput;