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
        <View>
          <Text style={styles.mealItemTitle}>{title}</Text>
        </View>

        <View>
          <Text>{duration}mins</Text>
          <Text>{affordability}</Text>
          <Text>{complexity}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    padding: 5,
    margin: 5,
    backgroundColor: "whitesmoke",
    borderRadius: 5,
    width: "100%",
    height: 300,
    padding: 10,
  },
  mealItemImage: {
    width: "100%",
    height: "100%",
  },
});

export default MealItem;
