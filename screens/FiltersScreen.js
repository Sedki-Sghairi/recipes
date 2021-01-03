import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MyHeaderButton from '../components/HeaderButton';

export default function FiltersScreen(props) {
	return (
		<View>
			<Text>FilterScreen</Text>
		</View>
	);
}
FiltersScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Filter Meals',
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={MyHeaderButton}>
				<Item title="Menu" iconName="ios-menu" onPress={() => navData.navigation.toggleDrawer()} />
			</HeaderButtons>
		)
	};
};
const styles = StyleSheet.create({});
