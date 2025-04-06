import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent, CounterComponent],  
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  homeMessage = signal('Hello, world!'); ///this is a signal that you can render on templlate. 
  ///the variable homeMessage is render in home.component.html at <app-greeting [message]="homeMessage()" />
        ///HomeMessage will be passed to child in <app-greeting [message]="homeMessage()" />
       /// in the attribute [message]="homeMessage()"
       ///since [message] is being passed down to greeting component, the message variable requires []
      //[message] variable is coming form greeting component

  keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`);
    ///This is the Event Listener right here//
        //ex. <input
          //   placeholder="Type something..."
          //   type="text"
          //   (keyup)="keyUpHandler($event)"
          // />
          ////using () for attribute is for event handler attributes
  }
}



////passing the data from Parent to child////
///  imports: [GreetingComponent, CounterComponent],  
////Home is parent. Greeting Component and Counter Component are child. 
///Data passes from Home to Greeting and Counter
///ex in home. component.html 
      //<app-greeting [message]="homeMessage()" />
      //<app-counter />