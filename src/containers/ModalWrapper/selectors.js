import { createSelector } from 'reselect';


export const getModalState = state => state.modalState;
export const getRecipeBox = state => state.recipeBox;
export const selectCurrentModal = createSelector(getModalState, modalState => modalState.currentModal);
export const selectEditingId = createSelector(getModalState, modalState => modalState.editing);
export const selectInitialValues = createSelector(
    getModalState,
    getRecipeBox,
    (modalState, recipeBox) => recipeBox.recipes[modalState.editing]
);