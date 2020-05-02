import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MealItem } from "../components";

const FavouriteScreen = () => {
  return <MealItem />;
};

FavouriteScreen.navigationOptions = {
  headerTitle: "Your Favourites",
};

//Styles
const styles = StyleSheet.create({
  div: {
    backgroundColor: "lightblue",
  },
});

export default FavouriteScreen;
