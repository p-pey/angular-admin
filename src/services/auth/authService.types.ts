


export interface IAuthService {
       getUserSession(): Session;
       getUserToken(): string;
       
       setUserSession(): void;

       validateUserSession(): void;
       
}