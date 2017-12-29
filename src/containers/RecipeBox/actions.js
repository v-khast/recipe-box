import * as types from './constants'


export function deleteRecipe(id) {
    return {
        type: types.DELETE_RECIPE,
        payload: id
    };
}

export function showModal(name, editing = false) {
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

export function addRecipe(values) {
    const newRecipe = {
        name: values.name,
        ingredients: values.ingredients
    };
    return {
        type: types.ADD_RECIPE,
        payload: newRecipe
    };
}

export function editRecipe(values, id) {
    const updatedRecipe = {
        name: values.name,
        ingredients: values.ingredients
    };
    return {
        type: types.EDIT_RECIPE,
        payload: {recipe: updatedRecipe, id: id}
    };
}