import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  predictChance(arr: number[]): Observable<number> {
    return this.http.post<number>('/ian', { input: arr });
  }
}
