import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorDialogService } from '../errorDialog/errordialog.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(public errorDialogService: ErrorDialogService, private authService: AuthService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('token');

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // console.log('event--->>>', event);
                    // this.errorDialogService.openDialog(event);
                }
                return event;
            }),
            catchError((err: HttpErrorResponse) => {
                let data = {};
                data = {
                    error: err.error.error ? err.error.error : 'Respuesta inesperada, favor de consultar al administrador.',
                    status: err.error.code ? err.error.code : 500
                };

                if (err.error.code === 401) {
                    this.authService.logout();
                    // location.reload(true);
                }

                // this.errorDialogService.openSnackBar(data['error']);
                return throwError(data);
            }));
    }
}
