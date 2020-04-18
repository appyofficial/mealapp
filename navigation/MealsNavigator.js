import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
//import { createBottomTabNavigator } from "react-navigation-tabs";
//import { createDrawerNavigator } from "react-navigation-drawer";
import {
  CategoriesScreen,
  CategoryMealScreen,
  MealDetailScreen,
} from "../screens";

const MealNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  "Category Meal": CategoryMealScreen,
  "Meal Detail": MealDetailScreen,
});

export default createAppContainer(MealNavigator);
