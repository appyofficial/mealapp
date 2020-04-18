import React from "react";
import { Text, View, StyleSheet } from "react-native";

const MealDetailScreen = () => {
  return (
    <View style={styles.div}>
      <Text>This is CMealDetailScreen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  div: {
    backgroundColor: "lightblue",
  },
});

export default MealDetailScreen;
