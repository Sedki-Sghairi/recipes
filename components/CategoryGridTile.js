import React from 'react';
import { StyleSheet, Text, View, Platform, Dimensions } from 'react-native';
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';

let TouchCmp = TouchableOpacity;
if (Platform.OS === 'android' && Platform.Version >= 21) {
	TouchCmp = TouchableNativeFeedback;
}
export default function CategoryGridTile(props) {
	return (
		<TouchCmp
			style={styles.gridItem}
			onPress={() =>
				props.navigate.navigate('CategoryMeals', {
					categoryId: props.itemData.id
				})}
		>
			<View
				style={{
					...styles.container,
					...{
						backgroundColor: props.itemData.color
					}
				}}
			>
				<Text style={styles.title} numberOfLines={2}>
					{props.itemData.title}
				</Text>
			</View>
		</TouchCmp>
	);
}

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
		alignItems: 'center',
		justifyContent: 'center'
	},
	container: {
		flex: 1,
		borderRadius: 10,
		shadowColor: 'black',
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		elevation: 3,
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center',
		width: Dimensions.get('window').width / 2.5
	},
	title: {
		fontSize: 17,
		textAlign: 'center',
		fontWeight: 'bold'
	}
});
