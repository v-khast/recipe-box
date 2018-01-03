import { combineReducers } from 'redux'
import recipes from './containers/RecipeBox/reducer'
import modal from './containers/ModalWrapper/reducer'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    recipeBox: recipes,
    modalState: modal,
    form: formReducer
});

export default rootReducer