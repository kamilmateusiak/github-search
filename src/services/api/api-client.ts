import axios, { AxiosInstance, Method } from 'axios';
import { HTTPStatus } from '../../constants/http-status';

export interface IRequestOptions {
  url: string;
  method: Method;
}

export interface IRequestResult<TResult> {
  result: TResult | null;
  error: Error | null;
}

class ApiClient {
  api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.github.com'
    });
  }

  async request<TResult>(options: IRequestOptions): Promise<IRequestResult<TResult>> {
    const requestResult: IRequestResult<TResult> = {
      result: null,
      error: null
    };

    try {
      const response = await this.api.request(options);

      if (response.status !== HTTPStatus.Success) {
        requestResult.error = new Error(response.statusText);
      } else {
        requestResult.result = response.data;
      }
    } catch(e) {
      requestResult.error = e;
    }

    return requestResult;
  }

 get<TResult>(url: string): Promise<IRequestResult<TResult>> {
    return this.request<TResult>({ method: 'GET', url });
  }
}

const apiClient = new ApiClient();

export default apiClient;
