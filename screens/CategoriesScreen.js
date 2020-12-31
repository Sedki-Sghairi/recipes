import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function CategoriesScreen(props) {
	console.log(props);
	return (
		<View>
			<Text style={styles.bold}>hello from CategoriesScreen</Text>
			<Button title="next" onPress={() => props.navigation.navigate('CategoryMeals')} />
		</View>
	);
}

const styles = StyleSheet.create({
	bold: {
		fontWeight: 'bold'
	}
});
