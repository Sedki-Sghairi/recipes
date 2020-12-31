import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';
import { CATEGORIES } from '../data/dummy-data';

export default function CategoryMealsScreen(props) {
	const catId = props.navigation.getParam('categoryId');
	const myTitle = CATEGORIES.find((x) => x.id === catId).title;

	return (
		<View>
			<Text>{myTitle.title}</Text>
			<Button title="next" onPress={() => props.navigation.navigate('MealDetail')} />
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
const styles = StyleSheet.create({});
