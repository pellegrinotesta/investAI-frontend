import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest
} from '@angular/common/http';
import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, tap, throwError } from 'rxjs';

export function errorInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const toastrService = inject(ToastrService);
  const translateService = inject(TranslateService);

  return next(req).pipe(
    tap(() => toastrService.success(translateService.instant('MESSAGES.SUCCESS'), 'Success')),
    catchError((error: HttpErrorResponse) => {
      const errorMessage = error.error.message || error.message;
      if ([403].includes(error.status)) {
        toastrService.warning(translateService.instant('MESSAGES.NOT_ALLOWED'), 'Denied');
      } else {
        toastrService.error(errorMessage, 'Error');
      }
      return throwError(() => errorMessage);
    })
  );
}
