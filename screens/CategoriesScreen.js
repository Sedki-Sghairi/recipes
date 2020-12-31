import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CategoriesScreen() {
	return (
		<View>
			<Text style={styles.bold}>hello from CategoriesScreen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	bold: {
		fontWeight: 'bold'
	}
});
