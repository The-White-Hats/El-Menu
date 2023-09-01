import { TextInput, View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useState } from 'react'
import ListItem from '../../components/listItem/listItem'
import { ScrollView } from 'react-native-gesture-handler'
const menu = require('../../Menu.json')

const Search = ({ route }) => {
    const { searchTerm } = route.params
    const [SearchTerm, setSearchTerm] = useState(searchTerm)
    const menuArr = menu.menu_sections
    return (
        <>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    onChangeText={(newText) => setSearchTerm(newText)}
                    defaultValue={SearchTerm}
                />
                <View style={styles.searchIconContainer}>
                    <FontAwesome name="search" size={24} color="gray" />
                </View>
            </View>
            <ScrollView>
                {menuArr.map((section) => {
                    return section.dishes.map((dish) => {
                        return (
                            dish.dish_name.startsWith(SearchTerm) && (
                                <ListItem dish={dish} />
                            )
                        )
                    })
                })}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    searchInput: {
        height: 40,
        width: 300,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        paddingLeft: 16,
        fontSize: 18,
        fontWeight: 'bold',
    },
    searchIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: 40,
        paddingRight: 9,
        height: 40,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
})

export default Search
