import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ITodo } from '../shared/interfaces/todo';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<ITodo[]>{
    return this.http.get("http://localhost:3000/todos")
      .pipe(
        map(response => {
          return response as ITodo[];
        })
      )
  }
}
