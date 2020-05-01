import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FavouriteScreen } from "../screens";
import { Ionicons } from "@expo/vector-icons";
//import { createDrawerNavigator } from "react-navigation-drawer";
import {
  CategoriesScreen,
  CategoryMealScreen,
  MealDetailScreen,
} from "../screens";
//constant
import Colors from "../constants/Colors";

//Header
const MealNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    "Category Meal": {
      screen: CategoryMealScreen,
    },
    "Meal Detail": MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
        height: 80,
      },
      headerTintColor: Colors.lightColor,
    },
  }
);

//Tab menu
const MealsTabFavNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favourites: {
      screen: FavouriteScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.secondryColor,
    },
  }
);

export default createAppContainer(MealsTabFavNavigator);
