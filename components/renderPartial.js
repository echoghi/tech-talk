export const renderPartial = `
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render } from 'react-testing-library';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../src/app/components/store';

function renderPartial(
    ui,
    { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}
) {
    const store = compose(applyMiddleware(thunk))(createStore)(rootReducer);

    return {
        ...render(
            <Router history={history}>
                <Provider store={store}>{ui}</Provider>
            </Router>
        ),
        history,
        store
    };
}
`;
