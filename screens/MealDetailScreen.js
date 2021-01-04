import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MyHeaderButton from '../components/HeaderButton';
import colors from '../constants/colors';
import { toggleFavorite } from '../store/actions/mealAction';
import { useCallback } from 'react/cjs/react.development';
export default function MealDetailScreen(props) {
	const MEALS = useSelector((state) => state.meals);
	const mealId = props.navigation.getParam('mealId');
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	const dispatch = useDispatch();
	const toggleFavoriteHandler = useCallback(
		() => {
			dispatch(toggleFavorite(mealId));
		},
		[ mealId, dispatch ]
	);
	useEffect(
		() => {
			props.navigation.setParams({
				toggle: toggleFavoriteHandler
			});
		},
		[ toggleFavoriteHandler ]
	);
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
	const title = data.navigation.getParam('mealTitle');
	const toggle = data.navigation.getParam('toggle');
	return {
		headerTitle: title,
		headerRight: (
			<HeaderButtons HeaderButtonComponent={MyHeaderButton}>
				<Item title="Favorite" iconName="ios-star" onPress={toggle} />
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
