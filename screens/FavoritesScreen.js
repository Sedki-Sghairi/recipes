import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MyHeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
const FavoritesScreen = (props) => {
	const MEALS = useSelector((state) => state.favorite);
	return <MealList listData={favMeals} navigation={props.navigation} />;
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

export default FavoritesScreen;
