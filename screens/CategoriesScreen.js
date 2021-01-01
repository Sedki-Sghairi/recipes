import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

export default function CategoriesScreen(props) {
	const renderGridItem = (itemData) => {
		return <CategoryGridTile itemData={itemData.item} navigate={props.navigation} />;
	};
	return <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />;
}
CategoriesScreen.navigationOptions = {
	headerTitle: 'Categories'
};
