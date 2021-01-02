import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';
import { CATEGORIES, MEALS } from '../data/dummy-data';

export default function CategoryMealsScreen(props) {
	const renderMealItem = (itemData) => {
		return (
			<View>
				<Text>{itemData.item.title}</Text>
			</View>
		);
	};
	const catId = props.navigation.getParam('categoryId');
	const myTitle = CATEGORIES.find((x) => x.id === catId).title;
	const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);
	return (
		<View style={styles.screen}>
			<FlatList data={meals} keyExtractor={(item, index) => item.id} renderItem={renderMealItem} />
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
