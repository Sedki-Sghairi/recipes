import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MyHeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../constants/colors';
const FavoritesScreen = (props) => {
	const MEALS = useSelector((state) => state.favorite);
	return MEALS.length !== 0 ? (
		<MealList listData={MEALS} navigation={props.navigation} />
	) : (
		<View style={styles.screen}>
			<Text style={styles.txt}>No Favorite Dishes Selected.</Text>
		</View>
	);
};

FavoritesScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Your Favorite',
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={MyHeaderButton}>
				<Item title="Menu" iconName="ios-menu" onPress={() => navData.navigation.toggleDrawer()} />
			</HeaderButtons>
		)
	};
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	txt: {
		fontSize: 20,
		color: colors.automn
	}
});
export default FavoritesScreen;
