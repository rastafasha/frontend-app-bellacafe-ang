import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Producto } from '../models/producto.model';
import { Observable } from "rxjs";

const base_url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  get token():string{
    return localStorage.getItem('token') || '';
  }


  get headers(){
    return{
      headers: {
        'x-token': this.token
      }
    }
  }

  getProductos() {
    return this.http.get<Producto>(this.serverUrl + '/productos').pipe(
      catchError(this.handleError)
    );
  }


  getProducto(id: string) {
    return this.http.get<Producto>(this.serverUrl + '/productos/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getProductoById(_id: string){
    const url = `${base_url}/productos/${_id}`;
    return this.http.get(url, this.headers)
      .pipe(
        // map((resp:{ok: boolean, producto}) => resp.producto)
        );

  }



  listar_newest():Observable<any>{
    const url = `${base_url}/productos/productos_nuevos/show_producto`;
    return this.http.get(url,  this.headers);
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
