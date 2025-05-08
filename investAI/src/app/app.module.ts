import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { cacheInterceptorFn } from './shared/interceptors/cache.interceptor';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './shared/services/auth/auth.service';
import { RefreshTokenService } from './shared/services/auth/refresh-token.service';
import { environment } from '../environments/environment';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function tokenGetter() {
  return localStorage.getItem('token'); // o 'encryptedUser', se ci salvi il JWT lì
}

@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'it',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: (authService: AuthService) => {
          return {
            tokenGetter: () => {
              const storedUser = authService.getEncryptedStoredUsed();
              return storedUser?.authentication;
            },
            allowedDomains: environment.jwt.allowedDomain
          };
        },
        deps: [AuthService]
      }
    })
  ],
  providers: [
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([cacheInterceptorFn])
    ),
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }),
    provideAnimationsAsync(),
    {
      provide: APP_INITIALIZER,
      useFactory: (refreshTokenService: RefreshTokenService) => () => refreshTokenService.scheduleSilentRefresh(),
      multi: true,
      deps: [RefreshTokenService]
    }
  ],
  // Removed bootstrap array as AppComponent is a standalone component
})
export class AppModule { }
