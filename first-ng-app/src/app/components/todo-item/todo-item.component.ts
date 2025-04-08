import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [HighlightCompletedTodoDirective, UpperCasePipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  todo = input.required<Todo>();
  ///this is display in this:///
//   <li
//   appHighlightCompletedTodo
//   [isCompleted]="todo().completed"
//   class="todos__item"
// >

  todoToggled = output<Todo>();

//   ///// <input
//     id="todo-{{ todo().id }}"
//     type="checkbox"
//     [checked]="todo().completed"
//     (change)="this.todoClicked()"
//   />
// //////
  todoClicked() {
    this.todoToggled.emit(this.todo());
  }

  /// <label for="todo-{{ todo().id }}">{{ todo().title | uppercase }}</label>//



}
