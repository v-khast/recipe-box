import { combineReducers } from 'redux'
import recipes from './containers/RecipeBox/reducer'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    recipeBox: recipes,
    form: formReducer
});

export default rootReducer