import { IAuthService, TLogin, TLoginResult } from "./AuthService.types";



export class AuthService implements IAuthService {
       login(inputs: TLogin): Promise<TLoginResult> {
           return Promise.resolve({ 
              data: {
                     email: '',
                     expired: Date.now(),
                     firstName:'',
                     lastLogin: Date.now(),
                     lastName: ''
              },
              error: false,
              message: ''
            })
       }
};