import React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { MEALS } from "../data/dummyData";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderButton } from "../components";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView style={styles.meal}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.mealImage} />
      <View>
        <Text>{selectedMeal.duration}mins</Text>
        <Text>{selectedMeal.affordability}</Text>
        <Text>{selectedMeal.complexity}</Text>
      </View>
      <Text>Ingrediants</Text>
      {selectedMeal.ingredients.map((ingrediant) => (
        <Text key={ingrediant}>{ingrediant}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("mark as fav");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  meal: { width: "100%" },
  mealImage: {
    width: "100%",
    height: 300,
  },
});

export default MealDetailScreen;
