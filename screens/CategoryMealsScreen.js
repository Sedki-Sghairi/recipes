import MealList from '../components/MealList';
import { CATEGORIES } from '../data/dummy-data';
import { useSelector } from 'react-redux';
import React from 'react';
export default function CategoryMealsScreen(props) {
	const catId = props.navigation.getParam('categoryId');
	// const myTitle = CATEGORIES.find((x) => x.id === catId).title;
	const MEALS = useSelector((state) => state.filtered);
	const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);
	return <MealList listData={meals} navigation={props.navigation} />;
}

CategoryMealsScreen.navigationOptions = (a) => {
	const id = a.navigation.getParam('categoryId');
	const foo = CATEGORIES.find((x) => x.id === id).title;
	return {
		headerTitle: foo
	};
};
