import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { HeaderButton } from "../components";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
const FilterScreen = () => {
  return (
    <View style={styles.div}>
      <Text>This is CFilterScreen.</Text>
    </View>
  );
};

FilterScreen.navigationOptions = (navData) => ({
  headerTitle: "Filter Meals",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  div: {
    backgroundColor: "lightblue",
  },
});

export default FilterScreen;
