import React, { useCallback, useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MyHeaderButton from '../components/HeaderButton';
import colors from '../constants/colors';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/mealAction';

const TurnOnOff = (props) => (
	<View style={styles.filterContainer}>
		<Text style={styles.label}>{props.label}</Text>
		<Switch
			trackColor={{
				true: colors.grass
			}}
			thumbColor={Platform.OS === 'android' ? colors.automn : ''}
			value={props.state}
			onValueChange={props.onChange}
		/>
	</View>
);
export default function FiltersScreen(props) {
	const [ isGlutenFree, setIsGlutenFree ] = useState(false);
	const [ isLactoseFree, setIsLactoseFree ] = useState(false);
	const [ isVegan, setIsVegan ] = useState(false);
	const [ isVegetarian, setIsVegetarian ] = useState(false);
	const { navigation } = props;
	const dispatch = useDispatch();
	const saveFilters = useCallback(
		() => {
			const appliedFilters = {
				glutenFree: isGlutenFree,
				lactoseFree: isLactoseFree,
				vegetarian: isVegetarian,
				vegan: isVegan
			};

			dispatch(setFilters(appliedFilters));
		},
		[ isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch ]
	);
	useEffect(
		() => {
			navigation.setParams({
				save: saveFilters
			});
		},
		[ saveFilters ]
	);
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Available Filters / Restrictions</Text>
			<TurnOnOff label="Gluten-Free" state={isGlutenFree} onChange={(newValue) => setIsGlutenFree(newValue)} />
			<TurnOnOff label="Lactose-Free" state={isLactoseFree} onChange={(newValue) => setIsLactoseFree(newValue)} />
			<TurnOnOff label="Vegan" state={isVegan} onChange={(newValue) => setIsVegan(newValue)} />
			<TurnOnOff label="Vegetarian" state={isVegetarian} onChange={(newValue) => setIsVegetarian(newValue)} />
		</View>
	);
}
FiltersScreen.navigationOptions = (navData) => {
	const foo = navData.navigation.getParam('save');
	return {
		headerTitle: 'Filter Meals',
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={MyHeaderButton}>
				<Item title="Menu" iconName="ios-menu" onPress={() => navData.navigation.toggleDrawer()} />
			</HeaderButtons>
		),
		headerRight: (
			<HeaderButtons HeaderButtonComponent={MyHeaderButton}>
				<Item title="save" iconName="ios-save" onPress={foo} />
			</HeaderButtons>
		)
	};
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center'
	},
	filterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '80%',
		marginVertical: 15
	},
	title: {
		fontWeight: 'bold',
		fontSize: 22,
		margin: 20,
		textAlign: 'center'
	},
	label: {
		fontSize: 16,
		color: colors.earth,
		fontWeight: 'bold'
	}
});
