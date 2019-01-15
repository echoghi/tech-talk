export const renderTest = `
const simulateToggle = jest.fn();

describe('<Tab />', () => {
    test('renders correctly when active', () => {
        const { getByTestId } = render(
            <Tab label="Tab Test" active onClick={simulateToggle} panel={<div>Test</div>} />
        );

        // tab icon is in active state
        expect(getByTestId('tab-icon').classList).toContain('active');

        // Test Tab Label
        expect(getByTestId('tab-label')).toHaveTextContent('Tab Test');

        // Test Tab Panel
        expect(getByTestId('tab-panel')).toHaveTextContent('Test');

        // toggle tab
        fireEvent.click(getByTestId('tab'));

        expect(simulateToggle).toHaveBeenCalledTimes(1);
    });
});
`;
