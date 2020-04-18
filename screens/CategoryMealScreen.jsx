import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummyData";
import Colors from "../constants/Colors.js";

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return (
    <View style={styles.div}>
      <Text>{selectedCategory.title}</Text>
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navData) => {
  const catId = navData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: Colors.secondryColor,
  };
};

const styles = StyleSheet.create({
  div: {
    backgroundColor: "lightblue",
  },
});

export default CategoryMealScreen;
