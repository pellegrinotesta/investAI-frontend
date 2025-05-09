// app.config.ts
import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthService } from './shared/services/auth/auth.service';
import { RefreshTokenService } from './shared/services/auth/refresh-token.service';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { cacheInterceptorFn } from './shared/interceptors/cache.interceptor';
import { environment } from '../environments/environment';
import { routes } from './app.routes'; 
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { TokenExpiredInterceptor } from './shared/interceptors/tokenExpired.interceptor';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

export function jwtOptionsFactory(authService: AuthService) {
  return {
    tokenGetter: () => {
      const storedUser = authService.getEncryptedStoredUsed();
      return storedUser?.authentication;
    },
    allowedDomains: environment.jwt.allowedDomain
  };
}

export function appInitializerFactory(refreshTokenService: RefreshTokenService) {
  return () => refreshTokenService.scheduleSilentRefresh();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withPreloading(PreloadAllModules)
    ),
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([
        //errorInterceptor,
      ])
    ),
    importProvidersFrom(
      BrowserModule,
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
          useFactory: jwtOptionsFactory,
          deps: [AuthService]
        }
      })
    ),
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }),
    provideAnimationsAsync(),
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: HTTP_INTERCEPTORS, useClass: TokenExpiredInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [RefreshTokenService],
      multi: true
    },
    provideRouter(routes) // opzionale se usi standalone routing
  ]
};
