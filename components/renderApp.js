export const renderApp = `
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render } from 'react-testing-library';
import { createStore, applyMiddleware, compose } from 'redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { DoctorTheme } from '../src/app/components/MUI/DoctorTheme';
import AppIndex from '../src/app/components/appIndex';
import { rootReducer } from '../src/app/components/store';

function renderApp({
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
} = {}) {
    // initialize redux store with reducers from the PADM
    const store = compose(applyMiddleware(thunk))(createStore)(rootReducer);

    return {
        ...render(
            <MuiThemeProvider theme={DoctorTheme}>
                <Provider store={store}>
                    <Router history={history}>
                        <AppIndex />
                    </Router>
                </Provider>
            </MuiThemeProvider>
        ),
        history,
        store
    };
}
`;
