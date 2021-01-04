import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/mealAction';
const initialState = {
	meals: MEALS,
	filtered: MEALS,
	favorite: []
};

export default function mealReducer(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_FAVORITE:
			const existingIndex = state.favorite.findIndex((x) => x.id === action.mealId);
			if (existingIndex >= 0) {
				const newFav = [ ...state.favorite ];
				newFav.splice(existingIndex, 1);
				return { ...state, favorite: newFav };
			} else {
				return { ...state, favorite: state.favorite.concat(state.meals.find((x) => x.id === action.mealId)) };
			}
		case SET_FILTERS:
			const filters = action.filters;
			const filteredMeals = state.meals.map((meal) => {
				if (filters.glutenFree && !meal.isGlutenFree) {
					return false;
				}
				if (filters.lactoseFree && !meal.isLactoseFree) {
					return false;
				}
				if (filters.vegan && !meal.isVegan) {
					console.log(meal);
					return false;
				}
				if (filters.vegetarian && !meal.isVegetarian) {
					return false;
				}
				return true;
			});
			return { ...state, filtered: filteredMeals };
		default:
			return state;
	}
}
