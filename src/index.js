import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { App } from './containers/App/App'
import { loadState } from "./utils/localStorage";
import reducer from './reducer'
import thunk from 'redux-thunk';


const persistedState = loadState();

const store = createStore(
    reducer,
    persistedState,
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);