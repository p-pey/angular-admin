import { ISession, SessionService } from "../Session";
import { IXHRService } from "./XHR.service.types";



class XHRService implements IXHRService {
       private Xhr: XMLHttpRequest;
       private header = new Headers();
       constructor() {
              this.Xhr = new XMLHttpRequest();
       };

       private async onRequestBegin() {
              const session = await SessionService.getSession();
              this.header.set('Authorization', `bearer ${  }`);
       };
       private onResponseReceive() {
              
       }


       onResponse() {

       }
};



const Request = new XHRService();

export { Request };