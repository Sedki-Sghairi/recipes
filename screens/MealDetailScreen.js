import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MyHeaderButton from '../components/HeaderButton';
export default function MealDetailScreen(props) {
	const mealId = props.navigation.getParam('mealId');
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	return (
		<View>
			<Text>ok</Text>
		</View>
	);
}
MealDetailScreen.navigationOptions = (data) => {
	const id = data.navigation.getParam('mealId');
	const myMeal = MEALS.find((x) => x.id === id);

	return {
		headerTitle: myMeal.title,
		aderRight: () => (
			<HeaderButtons HeaderButtonComponent={MyHeaderButton}>
				<Item title="Favorite" iconName="ios-star" onPress={() => console.log('ok')} />
			</HeaderButtons>
		)
	};
};
const styles = StyleSheet.create({});
