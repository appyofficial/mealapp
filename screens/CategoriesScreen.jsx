import React from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummyData";

const renderGridItem = (itemData) => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen = (props) => {
  return (
    <View style={styles.div}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  div: {
    padding: 10,
    fontFamily: "roboto",
  },
  gridItem: {
    margin: 10,
    flex: 1,
    height: 50,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
