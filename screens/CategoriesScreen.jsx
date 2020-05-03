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
import { CategoryGridTile, HeaderButton } from "../components";
//nav import
import { HeaderButtons, Item } from "react-navigation-header-buttons";

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

CategoriesScreen.navigationOptions = (navData) => ({
  headerTitle: "Amanda's Kitchen",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  div: {
    fontFamily: "roboto",
    height: "100%",
  },
});

export default CategoriesScreen;
