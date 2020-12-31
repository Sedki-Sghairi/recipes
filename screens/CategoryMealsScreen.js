import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';
import { CATEGORIES } from '../data/dummy-data';

export default function CategoryMealsScreen(props) {
	const catId = props.navigation.getParam('categoryId');
	const myTitle = CATEGORIES.find((x) => x.id === catId).title;

	return (
		<View style={styles.screen}>
			<Text>{myTitle}</Text>
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
