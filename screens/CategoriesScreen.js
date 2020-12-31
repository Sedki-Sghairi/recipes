import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES } from '../data/dummy-data';

const renderGridItem = (itemData) => {
	return (
		<View style={styles.gridItem}>
			<Text style={styles.bold}>{itemData.item.title}</Text>
		</View>
	);
};

export default function CategoriesScreen(props) {
	return <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />;
}

const styles = StyleSheet.create({
	bold: {
		fontWeight: 'bold'
	},
	gridItem: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 15,
		height: 100
	}
});
