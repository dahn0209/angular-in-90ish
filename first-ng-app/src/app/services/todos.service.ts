import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', ////This means that this service is provided everywhere//
})
export class TodosService {
  http = inject(HttpClient);
  ///this is getting connected with external API
  // http =inject(httpClient) allows you to use CRUD such as POST,GET,PUT, DELETE
  getTodosFromApi() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }
}
///Angular Services: used to encapsulate data, making HTTP calls, or performing
//any task that is not related directly to data rendering 



///Services has @injectable, which means that services can be injected in other places, 
/// while component has @Component


//This is going to be injected in the to-do comoponent file

// ## Making HTTP calls with Angular Services

// - Provide HTTP module/providers in the app config using `provideHttpClient()`
// - Inject the `HttpClient` service
// - Use the `http` methods

