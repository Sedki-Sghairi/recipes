import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import colors from '../constants/colors';
import FavoritesScreen from '../screens/FavoritesScreen';
//bottom navigation
import { createBottomTabNavigator } from 'react-navigation-tabs';

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

const Tab = createBottomTabNavigator({
	Meals: RootStack,
	Favorites: FavoritesScreen
});
const AppContainer = createAppContainer(Tab);

export default AppContainer;
