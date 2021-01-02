import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import colors from '../constants/colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
//bottom navigation
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';

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

const Tab = createBottomTabNavigator(
	{
		Meals: {
			screen: RootStack,
			navigationOptions: {
				tabBarIcon: (tabIfo) => {
					return <Ionicons name="ios-restaurant" size={25} color={tabIfo.tintColor} />;
				}
			}
		},
		Favorites: {
			screen: FavoritesScreen,
			navigationOptions: {
				tabBarIcon: (tabinfo) => {
					return <Ionicons name="ios-star" size={25} color={tabinfo.tintColor} />;
				}
			}
		}
	},
	{
		tabBarOptions: {
			activeTintColor: colors.earth
		}
	}
);
const AppContainer = createAppContainer(Tab);

export default AppContainer;
