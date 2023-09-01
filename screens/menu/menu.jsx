import { SafeAreaView, StatusBar, View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useState } from "react";

import { restaurant_name, menu_sections } from "./../../Menu.json";
import colors from "./../../colors.json";
import SearchInput from "./sub/searchInput";

const filters = menu_sections.map((section) => section.section_name);
filters.unshift("Full Menu");

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
    const [selectedFilter, setSelectedFilter] = useState("Full Menu");
    return (
        <SafeAreaView style={styles.Menu}>
            <LogoContainer />
            <View style={styles.searchBarContainer}><SearchInput /></View>
            <Filters selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    Menu: {
        backgroundColor: "white"
    },
    statusbar: {
        backgroundColor: colors.primary,
    },
    logoContainer: {
        height: 80,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    logoText: {
        color: "white",
        fontSize: 40,
        // fontWeight: "bold",
        fontFamily: 'dancing-script',
    },
    searchBarContainer: {
        height: 60,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
    },
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
});
export default Menu;