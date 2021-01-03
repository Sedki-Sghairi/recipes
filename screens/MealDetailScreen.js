import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MyHeaderButton from '../components/HeaderButton';
import colors from '../constants/colors';
export default function MealDetailScreen(props) {
	const mealId = props.navigation.getParam('mealId');
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	return (
		<ScrollView>
			<Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
			<View style={styles.details}>
				<Text>{selectedMeal.duration}m</Text>
				<Text>{selectedMeal.complexity.toUpperCase()}</Text>
				<Text>{selectedMeal.affordability.toUpperCase()}</Text>
			</View>
			<Text style={styles.title}>Ingredients</Text>
			{selectedMeal.ingredients.map((item) => {
				return (
					<Text style={styles.txt} key={item}>
						{item}
					</Text>
				);
			})}
			<Text style={styles.title}>Steps</Text>
			{selectedMeal.steps.map((item) => {
				return (
					<Text style={styles.txt} key={item}>
						{item}
					</Text>
				);
			})}
		</ScrollView>
	);
}
MealDetailScreen.navigationOptions = (data) => {
	const id = data.navigation.getParam('mealId');
	const myMeal = MEALS.find((x) => x.id === id);

	return {
		headerTitle: myMeal.title,
		headerRight: (
			<HeaderButtons HeaderButtonComponent={MyHeaderButton}>
				<Item title="Favorite" iconName="ios-star" onPress={() => console.log('ok')} />
			</HeaderButtons>
		)
	};
};
const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 200
	},
	details: {
		flexDirection: 'row',
		padding: 15,
		justifyContent: 'space-around'
	},
	title: {
		textAlign: 'center',
		fontWeight: 'bold',
		color: colors.winter,
		fontSize: 17,
		marginVertical: 10,
		letterSpacing: 1.5
	},
	txt: {
		textAlign: 'left',
		marginHorizontal: 10,
		padding: 5,
		borderBottomColor: colors.earth,
		borderBottomWidth: 1
	}
});
