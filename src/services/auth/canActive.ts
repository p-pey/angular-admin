import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router'
import { IAuthService } from './AuthService.types';


export class AuthService implements CanActivate {
       constructor(AuthService: IAuthService) {};

       canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
           
       }
}