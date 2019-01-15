export const renderPartialTest = `
import { fireEvent, cleanup, waitForElement } from 'react-testing-library';
import { renderPartial } from 'testUtils';
import AddLocation from '../AddLocation';

describe('<AddLocation />', () => {
    afterEach(cleanup);

    test('validation should work for Telemedicine practices', async () => {
        const { getByTestId } = renderPartial(<AddLocation />);

        // inputs for practice type Telemedicine
        const expectedInputs = [
            { name: 'listings__add-location--name', label: 'practice_name_validation_label' },
            { name: 'listings__add-location--state', label: null },
            { name: 'listings__add-location--phone', label: 'phone_number_validation_label' }
        ];

        // wait for practice type fetch to resolve
        const practiceTypes = await waitForElement(() => getByTestId('location__type--DME'));

        // select Telemedicine
        fireEvent.change(getByTestId('listings__add-location--type'), {
            target: { value: '2', name: 'type' }
        });

        // Simulate form submission attempt
        fireEvent.click(getByTestId('listings__add-location-btn'));

        for (let input of expectedInputs) {
            // input field should have invalid class
            expect(getByTestId(input.name).classList).toContain('invalid');

            if (input.label) {
                // validation label should appear
                expect(getByTestId(input.label).classList).toContain('invalid');
            }
        }
    });
});
`;
