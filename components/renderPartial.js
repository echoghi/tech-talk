export const renderPartial = `
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
