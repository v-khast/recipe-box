import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { App } from './containers/App/App'
import { loadState } from "./utils/localStorage";
import reducer from './reducer'


const persistedState = loadState();

const store = createStore(
    reducer,
    persistedState
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);