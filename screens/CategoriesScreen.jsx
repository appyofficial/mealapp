import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
//dummy data
import { CATEGORIES } from "../data/dummyData";
//components
import { CategoryGridTile } from "../components";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        icon={itemData.item.icon}
        onSelect={() => {
          navigation.navigate({
            routeName: "Category Meal",
            params: { categoryId: itemData.item.id },
          });
        }}
      />
    );
  };
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

CategoriesScreen.navigationOptions = {
  headerTitle: "Manda's Kitchen",
};

const styles = StyleSheet.create({
  div: {
    fontFamily: "roboto",
    height: "100%",
  },
});

export default CategoriesScreen;
