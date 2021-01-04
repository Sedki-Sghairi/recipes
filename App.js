import React from 'react';
import AppContainer from './navigation/MealNavigator';
// Before rendering any navigation stack
import { enableScreens } from 'react-native-screens';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mealReducer from './store/reducers/meals';

enableScreens();
const store = createStore(mealReducer);

export default function App() {
	return (
		<Provider store={store}>
			<AppContainer />
		</Provider>
	);
}
