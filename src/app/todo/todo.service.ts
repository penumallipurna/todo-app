import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ITodo } from '../shared/interfaces/todo';

import { environment } from '../../environments/environment';

@Injectable()
export class TodoService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getTodos(): Observable<ITodo[]>{
    return this.http.get(`${this.baseUrl}/todos`)
      .pipe(
        map(response => {
          return response as ITodo[];
        })
      )
  }
}
