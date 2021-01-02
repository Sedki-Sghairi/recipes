import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from './MealItem';

export default function MealList(props) {
	const renderMealItem = (itemData) => {
		return (
			<MealItem
				duration={itemData.item.duration}
				image={itemData.item.imageUrl}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				title={itemData.item.title}
				onSelectMeal={() =>
					props.navigation.navigate('MealDetail', {
						mealId: itemData.item.id
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
