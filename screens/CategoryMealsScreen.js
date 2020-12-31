import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';
import { CATEGORIES } from '../data/dummy-data';

export default function CategoryMealsScreen(props) {
	const catId = props.navigation.getParam('categoryId');
	const sed = CATEGORIES.find((x) => x.id === catId).title;

	return (
		<View>
			<Text>{sed.title}</Text>
			<Button title="next" onPress={() => props.navigation.navigate('MealDetail')} />
		</View>
	);
}

CategoryMealsScreen.navigationOptions = (a) => {
	console.log(a);
};
const styles = StyleSheet.create({});
