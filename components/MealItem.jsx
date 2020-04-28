import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

const MealItem = ({
  onSelect,
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
}) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.mealItem}>
      <ImageBackground source={{ uri: imageUrl }} style={styles.mealItemImage}>
        <View style={styles.mediaCt}>
          <View style={styles.mealItemTitleCtn}>
            <Text style={styles.mealItemTitle}>{title}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.mealItemDetails}>
        <Text>{duration}mins</Text>
        <Text>{affordability}</Text>
        <Text>{complexity}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mealItemTitleCtn: {
    backgroundColor: "rgba(250, 250, 250, 0.8)",
    textAlign: "center",
    paddingVertical: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  mealItemTitle: {
    fontSize: 14,
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
  },
  mealItem: {
    margin: 5,
    borderRadius: 20,
    width: "95%",
    height: 300,
  },
  mealItemImage: {
    width: "100%",
    flexGrow: 2,
  },
  mealItemDetails: {
    backgroundColor: "lightgrey",
    display: "flex",
    maxHeight: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    flexGrow: 1,
  },
  mediaCt: {
    flexGrow: 1,
  },
});

export default MealItem;
