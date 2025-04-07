import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})

//OnInit is a life cycle loop//
// OnInit is a lifecycle hook interface in Angular.

// It lets you run custom initialization logic 
// (like data fetching, setup) after Angular finishes creating the component.


export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
///since TodosService can be injected anywhere, it is injected 
//here to grab the Todos array from todos.service.ts
///
  todoItems = signal<Array<Todo>>([]);
//   <ul class="todos">
//   @for (todo of todoItems() | filterTodos : searchTerm(); track todo.id) {
//   <app-todo-item (todoToggled)="updateTodoItem($event)" [todo]="todo" />
//   }
// </ul>
  searchTerm = signal('');
//   <input
//   name="searchTerm"
//   [(ngModel)]="searchTerm"
//   placeholder="Search todos..."
// />

  ngOnInit(): void {
    this.todoService
      .getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  }
}



// 🧩 Angular Analogy Summary
// React	                         Angular
// useState([])	                   signal([]) or a class property
// useEffect(() => {}, [])	       ngOnInit()
// setTodos(data)	                 todoItems.set(data)
// Injecting services manually	   inject(TodoService)
// props	@Input()
// onClick/callbacks	             @Output() + EventEmitter



// ✅ TL;DR
// inject(TodoService) = "give me the service instance"

// ngOnInit() = the place where you do logic like useEffect with []

// signal([]) = reactive state like useState([])

