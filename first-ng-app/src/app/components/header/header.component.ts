import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title = 'My first Angular app'; 
  ///angular data bidng title is in header.component.html at
  // <span routerLink="/">{{ title }}</span>//
      ///this is the way before angular 16


  // titleSignal=signal('My first Angular app')
        ///angular data bidng title is in header.component.html at
  
        //since this is a function then titleSignal needs to be run like a function titleSignal(),
        //  <span routerLink="/">{{ titleSignal() }}</span>//
        // using signal() is the preferred for recent angular
}
