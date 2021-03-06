import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private message: string;

  constructor(private _router: Router, private http: HttpClient) { }

  /**
 * this is used to clear anything that needs to be removed
 */
  clear(): void {
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null && !this.isTokenExpired();
  }

  // simulate jwt token is valid
  // https://github.com/theo4u/angular4-auth/blob/master/src/app/helpers/jwt-helper.ts
  isTokenExpired(): boolean {
    return false;
  }

  login(usuario: string, password: string): Observable<boolean> {
    const data = { username: usuario, password: password };
    return this.http.post<boolean>('http://localhost:8000/oauth/token', data)
      .pipe(
        map((response: any) => {
          console.log(response);
          localStorage.setItem('token', response.access_token);
          return true;
        })
      );
  }

  // logind(usuario: string, password: string) {
  //     const data = { username: usuario, password: password };
  //     this.http.post('http://localhost:8000/oauth/token', data)
  //     .subscribe(res => {
  //         console.log('res >>>>', res);
  //     },
  //     error => {
  //         console.log('error >>>>', error);
  //     }
  //     );
  // }

  /**
 * this is used to clear local storage and also the route to login
 */
  logout(): void {
    this.clear();
    this._router.navigate(['/asasas']);
  }

  decode() {
    return decode(localStorage.getItem('token'));
  }
}
