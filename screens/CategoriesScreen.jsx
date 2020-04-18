import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CategoriesScreen = (props) => {
  return (
    <View style={styles.div}>
      <Text>This is Categories Screen. HEY.</Text>
      <Button
        title="Go to meals list"
        onPress={() => {
          props.navigation.navigate({ routeName: "categoryMeal" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  div: {
    backgroundColor: "lightblue",
    fontFamily: "roboto",
  },
});

export default CategoriesScreen;
