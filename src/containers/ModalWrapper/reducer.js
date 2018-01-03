import { SHOW_MODAL, HIDE_MODAL } from './constants'


const initialState = {
    currentModal: undefined,
    editing: undefined
};

export default function recipes(state = initialState, action) {
    switch (action.type) {

        case SHOW_MODAL:
            return {
                ...state,
                currentModal: action.payload.name,
                editing: action.payload.editing
            };

        case HIDE_MODAL:
            return {
                ...state,
                currentModal: undefined,
                editing: undefined
            };

        default:
            return state
    }
}