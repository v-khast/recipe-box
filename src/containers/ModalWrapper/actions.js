import * as types from './constants'


export function showModal(name, editing = undefined) {
    return {
        type: types.SHOW_MODAL,
        payload: {name: name, editing: editing}
    };
}

export function hideModal() {
    return {
        type: types.HIDE_MODAL,
    };
}