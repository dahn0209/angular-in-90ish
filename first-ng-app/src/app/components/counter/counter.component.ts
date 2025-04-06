import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  counterValue = signal(0);
  increment() {
    this.counterValue.update((val) => val + 1);
    ///I can also use this one below
    // this.counterValue.set(this.counterValue()+ 1);

  }
  //increment counterValue, which is a event listern by 1
  decrement() {
    this.counterValue.update((val) => val - 1);
  }
  //dncrement counterValue, which is a event listern by 1

  reset() {
    this.counterValue.set(0);
  }
    //rests counterValue, which is a event listern to 0

}
