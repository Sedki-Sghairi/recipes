import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';
import { Header } from 'react-native/Libraries/NewAppScreen';
const MyHeaderButton = (props) => {
	return (
		<HeaderButton
			{...props}
			IconComponent={Ionicons}
			iconSize={23}
			color={Platform.OS === 'android' ? Colors.flower : Colors.ocean}
		/>
	);
};

export default MyHeaderButton;

const styles = StyleSheet.create({});
