import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MealItem from '../components/MealItem';
import colors from '../constants/colors';
import { CATEGORIES, MEALS } from '../data/dummy-data';

export default function CategoryMealsScreen(props) {
	const renderMealItem = (itemData) => {
		return (
			<MealItem
				duration={itemData.item.duration}
				image={itemData.item.imageUrl}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				title={itemData.item.title}
				onSelectMeal={() =>
					props.navigation.navigate('MealDetail', {
						mealId: itemData.item.id
					})}
			/>
		);
	};
	const catId = props.navigation.getParam('categoryId');
	const myTitle = CATEGORIES.find((x) => x.id === catId).title;
	const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);
	return (
		<View style={styles.screen}>
			<FlatList
				style={{ width: '100%' }}
				data={meals}
				keyExtractor={(item, index) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
}

CategoryMealsScreen.navigationOptions = (a) => {
	const id = a.navigation.getParam('categoryId');
	const foo = CATEGORIES.find((x) => x.id === id).title;
	return {
		headerTitle: foo
	};
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
