import { ISession } from "../Session";

export type TLogin = {
       email: string;
       password: string;
};

export type TLoginResult = {
       message: string;
       error: boolean;
       data: ISession;
}

export interface IAuthService {
       login(inputs: TLogin): Promise<TLoginResult>; 
}