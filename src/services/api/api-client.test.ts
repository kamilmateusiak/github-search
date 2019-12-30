import MockAdapter from 'axios-mock-adapter';
import apiClient from './api-client';

describe('Services | API | client', () => {
  const axiosMock = new MockAdapter(apiClient.api);

  beforeEach(() => {
    axiosMock.reset();
  });

  it('on successful get request should return proper format of response with data', async () => {
    const mockResponse = {
      data: { id: 1, name: 'John Smith' }
    };

    axiosMock.onGet('/some/path').reply(200, mockResponse.data);

    const response = await apiClient.get('/some/path');

    expect(response).toEqual({ result: mockResponse.data, error: null });
  });

  it('finished with error should return proper format of response with error', async () => {
    axiosMock.onGet('/some/not/existing/path').reply(404);

    const response = await apiClient.get('/some/not/existing/path');

    expect(response).toEqual({ result: null, error: new Error('Request failed with status code 404') });
  });
});
