import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router'
import { IAuthService } from './AuthService.types';


export class ProtectorService implements CanActivate {
       constructor(AuthService: IAuthService) {};

       canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
           return true;
       }
}