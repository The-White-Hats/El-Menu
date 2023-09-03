import { StatusBar, View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

import { restaurant_name, menu_sections } from './../../Menu.json';
import SearchInput from './sub/searchInput';
import ListItem from './../../components/listItem/listItem.jsx';
import colors from './../../colors.json';

const filters = menu_sections.map((section) => section.section_name);
filters.unshift('Full Menu');

const LogoContainer = () => {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>{restaurant_name}</Text>
    </View>
  )
};

const Filters = ({ selectedFilter, setSelectedFilter }) => {
  return (
    <ScrollView horizontal={true} style={styles.filtersContainer} showsHorizontalScrollIndicator={false}>
        {filters.map((filter, index) => (
          <Pressable key={index} style={{...styles.filter, backgroundColor: filter === selectedFilter ? colors.primary : colors.gray}} 
            onPress={() => setSelectedFilter(filter)}>
              <Text style={{...styles.filterText, color: filter === selectedFilter ? 'white' : colors.filterText}}>{filter}</Text>
          </Pressable>
        ))}
        <View style={{ width: 8 }} />
    </ScrollView>
  )
};

const MenuSection = ({ section, navigation }) => {
  return (
    <View style={styles.MenuSection}>
      <Text style={styles.MenuSectionText}>{section.section_name}</Text>
      <View style={{ alignItems: 'center' }}>
        {section.dishes.map((dish, index) => (
          <ListItem key={index} dish={dish} navigation={navigation} />
        ))}
      </View>
    </View>
  )
};

const MenuSections = ({ navigation, selectedFilter }) => {
  return (
    <>
      {menu_sections.map(
        (section, index) =>
          (section.section_name === selectedFilter || selectedFilter === 'Full Menu') 
          && ( <MenuSection key={index} section={section} navigation={navigation} /> )
      )}
    </>
  );
};

const Menu = ({ navigation }) => {
  const [selectedFilter, setSelectedFilter] = useState('Full Menu')
  return (
    <SafeAreaView style={styles.Menu}>
      <StatusBar backgroundColor={colors.primary} barStyle='dark-content' />
      <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
        <LogoContainer />
        <View>
          <View style={styles.searchBarContainer}>
              <SearchInput navigation={navigation} />
          </View>
          <Filters selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
        </View>
        <MenuSections navigation={navigation} selectedFilter={selectedFilter} />
      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  Menu: {
    backgroundColor: 'white',
    flex: 1,
  },
  statusbar: {
    backgroundColor: colors.primary,
  },
  logoContainer: {
    height: 80,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'dancing-script',
  },
  searchBarContainer: {
    height: 60,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filtersContainer: {
    backgroundColor: 'white',
    padding: 8,
  },
  filter: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 6,
  },
  filterText: {
    textTransform: 'uppercase',
    color: colors.filterText,
    fontSize: 12,
    fontWeight: 'bold',
  },
  whiteBackground: {
    position: 'absolute',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  MenuSection: {},
  MenuSectionText: {
    fontSize: 32,
    fontWeight: '800',
    paddingLeft: 10,
    marginBottom: 12,
    marginTop: 16,
  },
})
export default Menu
