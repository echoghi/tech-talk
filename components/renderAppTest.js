export const renderAppTest = `
import { renderApp } from 'testUtils';
import { cleanup, waitForElement } from 'react-testing-library';

describe('<DocPoints />', () => {
    afterEach(cleanup);

    test('displays correct values', async () => {
        const { getByTestId } = renderApp({
            route: '/listings/providers/profile=2933003'
        });

        // wait for the mock fetch calls to resolve
        // getByTestId = document.querySelector('data-testid="docpoints-percentage"');
        const docpointsPercentage = await waitForElement(() => getByTestId('docpoints-percentage'));

        // Test Score
        expect(docpointsPercentage).toHaveTextContent('80/80');

        // Test Link href
        expect(getByTestId('docpoints-link').getAttribute('href')).toEqual(
            '//local.doctor.com/Dr-Jane-Doe'
        );
    });
});
`;
