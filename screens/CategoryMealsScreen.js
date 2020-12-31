import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function CategoryMealsScreen(props) {
	console.log(props);
	return (
		<View>
			<Text>CategoryMealsScreen</Text>
			<Button title="next" onPress={() => props.navigation.navigate('MealDetail')} />
		</View>
	);
}

const styles = StyleSheet.create({});
