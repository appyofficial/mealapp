import React, { useState } from "react";
import { Text, View, StyleSheet, Switch } from "react-native";
import { HeaderButton } from "../components";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterSwitch}>
      <Text>{props.label}</Text>
      {/*thumbColor, trackColor props for switch */}
      <Switch value={props.value} onValueChange={props.onChange} />
    </View>
  );
};

const FilterScreen = () => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  return (
    <View style={styles.div}>
      <Text>This is CFilterScreen.</Text>
      <FilterSwitch
        label="Gluten free"
        value={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose free"
        value={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegeterian"
        value={isVegetarian}
        onChange={(newValue) => isVegetarian(newValue)}
      />
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
  filterSwitch: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
});

export default FilterScreen;
