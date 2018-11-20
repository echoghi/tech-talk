export const snapshot = `
import AddProvider from '../AddProvider';

describe('<AddProvider />', () => {
    afterEach(cleanup);

    test('snapshot', () => {
        const { container } = renderWithRedux(<AddProvider />);

        expect(container.firstChild).toMatchSnapshot();
    });
});`;
