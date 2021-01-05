import MealList from '../components/MealList';
import { CATEGORIES } from '../data/dummy-data';
import { useSelector } from 'react-redux';
import React from 'react';
import { Text, View } from 'react-native';
export default function CategoryMealsScreen(props) {
	const catId = props.navigation.getParam('categoryId');

	const MEALS = useSelector((state) => state.filtered);

	const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);
	if (meals.length === 0) {
		return (
			<View>
				<Text>No meals found. Please check your filters!</Text>
			</View>
		);
	}
	return <MealList listData={meals} navigation={props.navigation} />;
}

CategoryMealsScreen.navigationOptions = (a) => {
	const id = a.navigation.getParam('categoryId');
	const foo = CATEGORIES.find((x) => x.id === id).title;
	return {
		headerTitle: foo
	};
};
