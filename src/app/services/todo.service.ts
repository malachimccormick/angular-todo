import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrl = 'https://jsonplaceholder.typicode.com/todos';
  todoLimit = '?_limit=5';

  constructor(private http: HttpClient) { }

  getTodo(): Observable<Todo[]> {
  return this.http.get<Todo[]>(`${this.todoUrl}${this.todoLimit}`);
  }
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  toggleComplete(todo: Todo): Observable<any> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
}
