import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

const MealList = (props) => {
  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "Meal Detail",
            params: {
              mealId: item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.div}>
      <FlatList
        style={styles.mealItemContainer}
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

//Styles
const styles = StyleSheet.create({
  div: {
    width: "100%",
    marginHorizontal: "auto",
  },
});

export default MealList;
