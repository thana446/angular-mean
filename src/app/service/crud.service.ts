import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as ENV } from 'src/environments/environment';
import { catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
import { IBook } from '../Interface/book.interface';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  header: HttpHeaders = new HttpHeaders().set('Content-Type' ,'aplication/json')

  constructor(private http: HttpClient) { }

  addBook(data: IBook): Observable<any> {
    return this.http.post(`${ENV.REST_API}/add-book` ,data).pipe(
      catchError(this.handleError)
    )
  }

  getBooks(): Observable<any> {
    return this.http.get(`${ENV.REST_API}/`).pipe(
      catchError(this.handleError)
    )
  }

  getBook(id): Observable<any> {
    return this.http.get(`${ENV.REST_API}/read-book/${id}`).pipe(
      catchError(this.handleError)
    )
  }

  updateBook(book: IBook): Observable<any> {
    const {_id ,name ,price ,description} = book
    return this.http.put(`${ENV.REST_API}/update-book/${_id}` ,{name ,price ,description}).pipe(
      catchError(this.handleError)
    )
  }

  deleteBook(id): Observable<any> {
    return this.http.delete(`${ENV.REST_API}/delete-book/${id}`).pipe(
      catchError(this.handleError)
    )
  }

  handleError (error: HttpErrorResponse) {
    let errorMessage = ''
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message
    }else {
      errorMessage = `Error code: ${error.status} \nMessage: ${error.message}`
    }
    return throwError(errorMessage)
  }
}