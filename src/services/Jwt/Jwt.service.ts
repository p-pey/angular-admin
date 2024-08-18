import { sign, decode, verify } from 'jsonwebtoken'

export class JwtService {
       private secretKey: string | undefined;

       constructor() {
              this.secretKey = process.env['SECRET'];
       }

       static encodeToken() {

       };

       static decodeToken(payload: object) {

       }
};