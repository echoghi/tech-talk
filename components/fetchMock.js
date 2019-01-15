export const fetchMock = `
// API endpoints
const endpoints = [
    {
        name: 'https://p-providers.doctor.com/api/review/index',
        response: reviewData
    },
    {
        name: 'https://p-providers.doctor.com/api/review/reviewlinks',
        response: reviewLinksData
    }
];

// mock fetch to map request URL to associated json
global.fetch = jest.fn().mockImplementation((url, opt) => {
    let response;

    // match fetch request to correct response
    for (let endPoint of endPoints) {
        if (url.includes(endPoint.name)) {
            response = endPoint.response;
        }
    }

    // return a promise chain
    return Promise.resolve({
        json: () => Promise.resolve(response)
    });
});

// captured calls stored in fetch.mock.calls
`;
