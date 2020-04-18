import React from "react";
import { Text, View, StyleSheet } from "react-native";

const FavouriteScreen = () => {
  return (
    <View style={styles.div}>
      <Text>This is FavouriteScreen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  div: {
    backgroundColor: "lightblue",
  },
});

export default FavouriteScreen;
