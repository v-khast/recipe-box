import * as types from './constants'
import { saveState } from "../../utils/localStorage";


export const addRecipe = values => (dispatch, getState) => {
    const persistedState = getState().recipeBox;
    const newRecipe = {
        name: values.name,
        ingredients: values.ingredients
    };
    const updatedRecipes = [
        ...persistedState.recipes,
        newRecipe
    ];
    saveState({
        recipeBox: {
            recipes: updatedRecipes
        }
    });
    dispatch({
        type: types.ADD_RECIPE,
        payload: updatedRecipes
    });
};

export const editRecipe = (values, id) => (dispatch, getState) => {
    const persistedState = getState().recipeBox;
    const editedRecipe = {
        name: values.name,
        ingredients: values.ingredients
    };
    const updatedRecipes = persistedState.recipes.map((recipe, index) =>
        index === id ? editedRecipe : recipe
    );
    saveState({
        recipeBox: {
            recipes: updatedRecipes
        }
    });
    dispatch({
        type: types.EDIT_RECIPE,
        payload: updatedRecipes
    });
};

export const deleteRecipe = id => (dispatch, getState) => {
    const persistedState = getState().recipeBox;
    const updatedRecipes = persistedState.recipes.filter((recipe, index) => index !== id);
    saveState({
        recipeBox: {
            recipes: updatedRecipes
        }
    });
    dispatch({
        type: types.DELETE_RECIPE,
        payload: updatedRecipes
    });
};