import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import colors from '../constants/colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import FiltersScreen from '../screens/FiltersScreen';
const RootStack = createStackNavigator(
	{
		Categories: {
			screen: CategoriesScreen
		},
		CategoryMeals: {
			screen: CategoryMealsScreen
		},
		MealDetail: MealDetailScreen
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? colors.sun : '#fff'
			},
			headerTintColor: '#333'
		}
	}
);
const Fav = createStackNavigator(
	{
		Favorites: FavoritesScreen,
		MealDetail: MealDetailScreen
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? colors.sun : '#fff'
			},
			headerTintColor: '#333'
		}
	}
);

const navOpt = {
	Meals: {
		screen: RootStack,
		navigationOptions: {
			tabBarIcon: (tabIfo) => {
				return <Ionicons name="ios-restaurant" size={25} color={tabIfo.tintColor} />;
			},
			tabBarColor: colors.winter
		}
	},
	Favorites: {
		screen: Fav,
		navigationOptions: {
			tabBarIcon: (tabinfo) => {
				return <Ionicons name="ios-star" size={25} color={tabinfo.tintColor} />;
			},
			tabBarColor: colors.automn
		}
	}
};
const Tab =
	Platform.OS === 'android'
		? createMaterialBottomTabNavigator(navOpt, {
				activeColorLight: 'white',
				shifting: true
			})
		: createBottomTabNavigator(navOpt, {
				tabBarOptions: {
					activeTintColor: colors.earth
				}
			});
const FiltersNavigator = createStackNavigator({
	screen: FiltersScreen
});
const MainNavigator = createDrawerNavigator({
	MealsFavs: Tab,
	Filters: FiltersNavigator
});
const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;
