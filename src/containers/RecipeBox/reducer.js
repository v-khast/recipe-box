import { ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from './constants'


const initialState = {
    recipes: [],
    currentModal: undefined,
    editing: undefined
};

export default function recipes(state = initialState, action) {
    switch (action.type) {

        case ADD_RECIPE:
        case EDIT_RECIPE:
        case DELETE_RECIPE:
            return {
                ...state,
                recipes: action.payload
            };

        default:
            return state
    }
}