import { ISession } from "./Session.types";
import { SessionUtils } from "./Session.utils";



export class SessionService {

       static async deleteSession(): Promise<void> {
              const session = await this.getSession();
              SessionUtils.destroySession(session);
       };
       static async getSession(): Promise<ISession | null> {
           return Promise.resolve(null);
       };
       static async getSessionJWTToken(): Promise<string | null> {
              
       }
       static async setSession(): Promise<ISession> {
           return Promise.resolve({ email: '', firstName: '', lastLogin: 0, lastName: '', expired: 0 });
       };
       static async updateSession(): Promise<ISession> {
              return Promise.resolve({ email: '', firstName: '', lastLogin: 0, lastName: '', expired: 0 });
       };
};
