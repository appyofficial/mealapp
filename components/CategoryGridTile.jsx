import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CategoryGridTile = ({ onSelect, title, color, icon }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.gridItem}>
      <View style={styles.titleContainer}>
        <Text style={styles.gridIcon}>{icon}</Text>
        <Text style={{ ...styles.gridItemTitle, color: color }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    fontFamily: "roboto-bold",
    margin: 10,
    flex: 1,
    height: 50,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  titleContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  gridItemTitle: {
    fontFamily: "roboto-bold",
    fontSize: 15,
  },
  gridIcon: {
    fontSize: 20,
  },
});

export default CategoryGridTile;
