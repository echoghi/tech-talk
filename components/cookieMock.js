export const cookieMock = `
// mock cookies
jest.mock('universal-cookie', () => {
    class Cookies {
        constructor() {}
        
        get = key => {
            if (key === 'token') {
                return 'test';
            }
        };

        set = () => jest.fn();
        remove = () => jest.fn();
    }

    return Cookies;
});
`;
