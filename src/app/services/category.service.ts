import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Categoria } from '../models/categoria.model';

import { Observable } from "rxjs";

const base_url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Categoria>(this.serverUrl + '/categorias').pipe(
      catchError(this.handleError)
    );
  }


  getCategory(id: string) {
    return this.http.get<Categoria>(this.serverUrl + '/categorias/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }



  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
}
