import React from 'react';
import AppContainer from './navigation/MealNavigator';
// Before rendering any navigation stack
import { enableScreens } from 'react-native-screens';
enableScreens();
export default function App() {
	return <AppContainer />;
}
