import api, { ApiRequestConfig } from "./api-client";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

class DataService<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  fetchAll(requestConfig?: ApiRequestConfig) {
    return api.get<FetchResponse<T>>(this.endpoint, requestConfig);
  }
}

const create = <T>(endpont: string) => new DataService<T>(endpont);
export default create;
