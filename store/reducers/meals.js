import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/mealAction';
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

		default:
			return state;
	}
}
