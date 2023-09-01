import {  StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Button } from 'react-native';

const LogoContainer = () => {
    return (
        <View style={styles.logoContainer}>
            <Text style={styles.logoText}>{restaurant_name}</Text>
        </View>
    );
};

const Filters = ({selectedFilter, setSelectedFilter}) => {
    return (
        <ScrollView horizontal={true} style={styles.filtersContainer} showsHorizontalScrollIndicator={false}>
        {filters.map((filter) => (
            <Pressable style={{...styles.filter, backgroundColor: (filter === selectedFilter) ? colors.primary : colors.gray}} onPress={()=>setSelectedFilter(filter)}>

                <Text style={{...styles.filterText, color: (filter === selectedFilter) ? "white" : colors.filterText}}>{filter}</Text>

            </Pressable>   
        ))}
            <View style={{width: 8}}/>
        </ScrollView>
    );
};

const Menu = ({navigation}) => {
    return (
            <Filters selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
    );
    filtersContainer: {
        backgroundColor: "white",
        padding: 8,
    },
    filter: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 20,
        marginRight: 6,
    },
    filterText: {
        textTransform: "uppercase",
        color: colors.filterText,
        fontSize: 12,
        fontWeight: "bold",
    },
export default Menu;