import * as types from './constants'
import { loadState, saveState } from "../../utils/localStorage";


export function deleteRecipe(id) {
    const persistedState = loadState().recipeBox;
    saveState({
        recipeBox: {
            recipes: persistedState.recipes.filter((recipe, index) => {
                return index !== id;
            }),
            currentModal: undefined,
            editing: undefined
        }
    });
    return {
        type: types.DELETE_RECIPE,
        payload: id
    };
}

export function addRecipe(values) {
    const newRecipe = {
        name: values.name,
        ingredients: values.ingredients
    };
    const persistedState = loadState().recipeBox;
    saveState({
        recipeBox: {
            recipes: [
                ...persistedState.recipes,
                newRecipe
            ],
            currentModal: undefined,
            editing: undefined
        }
    });
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
    const persistedState = loadState().recipeBox;
    saveState({
        recipeBox: {
            recipes: persistedState.recipes.map((recipe, index) =>
                index === id ? updatedRecipe : recipe
            ),
            currentModal: undefined,
            editing: undefined
        }
    });
    return {
        type: types.EDIT_RECIPE,
        payload: {recipe: updatedRecipe, id: id}
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