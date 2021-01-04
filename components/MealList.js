import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from './MealItem';
import { useSelector } from 'react-redux';

export default function MealList(props) {
	const myFavorite = useSelector((state) => state.favorite);
	const renderMealItem = (itemData) => {
		const isFavorite = myFavorite.some((x) => x.id === itemData.item.id);
		return (
			<MealItem
				duration={itemData.item.duration}
				image={itemData.item.imageUrl}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				title={itemData.item.title}
				onSelectMeal={() =>
					props.navigation.navigate('MealDetail', {
						mealId: itemData.item.id,
						mealTitle: itemData.item.title,
						isFavorite: isFavorite
					})}
			/>
		);
	};
	return (
		<View style={styles.list}>
			<FlatList
				style={{ width: '100%' }}
				data={props.listData}
				keyExtractor={(item, index) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	list: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
