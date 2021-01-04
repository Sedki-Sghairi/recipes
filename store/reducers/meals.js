import { MEALS } from '../../data/dummy-data';
const initialState = {
	meals: MEALS,
	filtered: MEALS,
	favorite: []
};

export default function mealReducer(state = initialState, action) {
	return state;
}
