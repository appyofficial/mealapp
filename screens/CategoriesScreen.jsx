import React from "react";
import { Text, View, StyleSheet } from "react-native";

const CategoriesScreen = () => {
  return (
    <View style={styles.div}>
      <Text>This is Categories Screen. HEY.</Text>
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
