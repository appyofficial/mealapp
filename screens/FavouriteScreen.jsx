import React from "react";
import { StyleSheet } from "react-native";
import { MealList, HeaderButton } from "../components";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MEALS } from "../data/dummyData";

const FavouriteScreen = (props) => {
  const favMeal = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList listData={favMeal} navigation={props.navigation} />;
};

FavouriteScreen.navigationOptions = {
  headerTitle: "Your Favourites",
  headerLeft: (
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
};

//Styles
const styles = StyleSheet.create({
  div: {
    backgroundColor: "lightblue",
  },
});

export default FavouriteScreen;
