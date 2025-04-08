import { Directive, input, effect, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true,
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false);
  el = inject(ElementRef);
  stylesEffect = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backgroundColor = '#d3f9d8';
      this.el.nativeElement.style.color = '#6c757d';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgroundColor = '#fff';
      this.el.nativeElement.style.color = '#000';
    }
  });
}


// ## Angular Directives

// Angular Directives allow you to add additional behavior to elements in our Angular applications. <!-- .element: class="fragment"  -->

// --

// #### Types of Angular Directives

// - Components <!-- .element: class="fragment"  -->
// - Attribute directives <!-- .element: class="fragment"  -->
// - Structural directives <!-- .element: class="fragment"  -->

// --