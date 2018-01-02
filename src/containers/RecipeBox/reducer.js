import { ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE, SHOW_MODAL, HIDE_MODAL } from './constants'


const initialState = {
    recipes: [],
    currentModal: undefined,
    editing: undefined
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

        case ADD_RECIPE:
            return {
                ...state,
                recipes: [
                    ...state.recipes,
                    action.payload
                ],
            };

        case EDIT_RECIPE:
            return {
                ...state,
                recipes: state.recipes.map((recipe, index) =>
                    index === action.payload.id ? action.payload.recipe : recipe
                ),
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
                editing: undefined
            };

        default:
            return state
    }
}