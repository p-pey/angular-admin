import axios, { AxiosResponse } from "axios";

export class AuthProxy {
       
       private async request<T, U>(url: string, body: T): Promise<AxiosResponse<U, any>> {
              return axios.post<U>(url, body);
       }
}