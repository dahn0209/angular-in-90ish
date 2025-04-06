import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', ////This means that this service is provided everywhere//
})
export class TodosService {
  http = inject(HttpClient);
  getTodosFromApi() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }
}
///Angular Services: used to encapsulate data, making HTTP calls, or performing
//any task that is not related directly to data rendering 



///Services has @injectable, which means that services can be injected in other places, 
/// while component has @Component