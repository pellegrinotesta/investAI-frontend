import { Injectable, Injector } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { HttpBaseService } from '../../base/services/http-base.service';
import { AuthenticatedUser } from '../../models/authenticated-user.model';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RolePermissionService extends HttpBaseService<any> {

  constructor(injector: Injector,
    private readonly authService: AuthService,) {
    super(injector, environment.endpoints.roles);
  }

  public hasPermission(roles: string[] | undefined): boolean {
    if (roles === undefined || roles.length === 0) {
      return true;
    } else {
      const userAuthorities = this.getUserRole();
      return roles.some(role => userAuthorities.includes(role));
    }
  }

  getUserRole(): string[] {
    let userStored : AuthenticatedUser | undefined = this.authService.getStoredUsed();
    const user: AuthenticatedUser | undefined = userStored ? jwtDecode(userStored.authentication) : undefined;
    if(user)
      return user.authorities;
    return [];
  }
}
