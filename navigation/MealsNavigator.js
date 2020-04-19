import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
//import { createBottomTabNavigator } from "react-navigation-tabs";
//import { createDrawerNavigator } from "react-navigation-drawer";
import {
  CategoriesScreen,
  CategoryMealScreen,
  MealDetailScreen,
} from "../screens";
//constant
import Colors from "../constants/Colors";

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
      },
      headerTintColor: Colors.secondryColor,
    },
  }
);

export default createAppContainer(MealNavigator);
