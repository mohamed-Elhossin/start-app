
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiFunctionsService<T> {

  constructor(public http: HttpClient, @Inject(String) public configUrl: string
  ) { }

  // Get All Data
  get(): Observable<T> {
    return this.http.get<T>(this.configUrl);
  }

  // Get One T only
  getbyId(id): Observable<T> {
    return this.http.get<T>(this.configUrl + `/${id}`);
  }

  // Post New Data
  post(model: T): Observable<T> {
    return this.http.post<T>(this.configUrl, model);
  }

  // Edit data
  put(model: T, id): Observable<T> {
    return this.http.put<T>(this.configUrl + `/${id}`, model);
  }

  // Delete one Row by ID
  delete(id): Observable<T> {
    return this.http.delete<T>(this.configUrl + `/${id}`)
  }
}
