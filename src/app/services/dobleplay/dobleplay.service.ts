import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Folio } from 'src/app/models/folio';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DobleplayService {

  private apiURL = 'http://localhost:8000/';
  constructor(private http: HttpClient) { }

  getFolios(): Observable<Folio[]> {
    return this.http.get<Folio[]>(this.apiURL + 'folios')
    .pipe(
      map((response: Folio[]) => {
      // console.log(response['data']);
      return response['data'];
      })
    );
  }
}
