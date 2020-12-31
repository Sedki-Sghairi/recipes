import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { CATEGORIES } from '../data/dummy-data';

export default function CategoriesScreen(props) {
	const renderGridItem = (itemData) => {
		return (
			<TouchableOpacity
				style={styles.gridItem}
				onPress={() =>
					props.navigation.navigate('CategoryMeals', {
						categoryId: itemData.item.id
					})}
			>
				<View>
					<Text style={styles.bold}>{itemData.item.title}</Text>
				</View>
			</TouchableOpacity>
		);
	};
	return (
		<View style={styles.container}>
			<FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
		</View>
	);
}
CategoriesScreen.navigationOptions = {
	headerTitle: 'Categories'
};

const styles = StyleSheet.create({
	bold: {
		fontWeight: 'bold',
		fontSize: 22,
		paddingVertical: 5
	},
	gridItem: {
		margin: 15
	},
	container: {
		flex: 1,
		alignItems: 'center'
	}
});
