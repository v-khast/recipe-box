import { ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE, SHOW_MODAL, HIDE_MODAL } from './constants'
import update from 'immutability-helper';


const initialState = {
    recipes: [],
    currentModal: 'none',
    editing: false
};

export default function recipes(state = initialState, action) {
    switch (action.type) {

        case DELETE_RECIPE:
            return {
                ...state,
                recipes: state.recipes.filter((recipe, index) => {
                    return index !== action.payload;
                }),
            };

        case SHOW_MODAL:
            return {
                ...state,
                currentModal: action.payload.name,
                editing: action.payload.editing
            };

        case HIDE_MODAL:
            return {
                ...state,
                currentModal: 'none',
                editing: false
            };

        case ADD_RECIPE:
            return {
                ...state,
                recipes: [
                    ...state.recipes,
                    action.payload
                ],
            };

        case EDIT_RECIPE:
            return update(state, {
                recipes: {
                    [action.payload.id]: { $set: action.payload.recipe }
                }
            });

        default:
            return state
    }
}