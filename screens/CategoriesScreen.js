import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CategoryGridTile from '../components/CategoryGridTile';
import MyHeaderButton from '../components/HeaderButton';
import { CATEGORIES } from '../data/dummy-data';

export default function CategoriesScreen(props) {
	const renderGridItem = (itemData) => {
		return <CategoryGridTile itemData={itemData.item} navigate={props.navigation} />;
	};
	return <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />;
}
CategoriesScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Categories',
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={MyHeaderButton}>
				<Item title="Menu" iconName="ios-menu" onPress={() => navData.navigation.toggleDrawer()} />
			</HeaderButtons>
		)
	};
};
