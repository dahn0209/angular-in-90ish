import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss',
})
export class GreetingComponent {
  message = input('Hello hello!');
}



////passing the data from Parent to child////
//input() method says that it can receive data or message from the outside. 
///This is akin to passing props down in React
///<p>{{ message() }}</p>