export const loadableMock = `
// mock dynamic imports
jest.mock('react-loadable', () => {
    // resolves a component import immediately instead of
    // running react-loadable's dynamic import on route change
    function Loadable({ loader }) {
        const path = loader
            .toString()
            .replace(/[.']/g, '');

        const component = require(\`../src/app/components\${path}\`).default;

        return component;
    }

    return Loadable;
})`;
