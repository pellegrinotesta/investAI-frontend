import { Injectable, Injector } from '@angular/core';
import { HttpBaseService } from '../../../shared/base/services/http-base.service';
import { AuthenticatedUser } from '../../../shared/models/authenticated-user.model';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { AuthRequest } from '../models/auth-request.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends HttpBaseService<AuthenticatedUser> {

  constructor(injector: Injector) { 
    super(injector, environment.endpoints.auth)
  }

  login(credentials: AuthRequest): Observable<AuthenticatedUser> {
    return this.httpClient.post<AuthenticatedUser>(this.baseUrl, credentials);
  }
}
