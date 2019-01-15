export const renderApp = `
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
