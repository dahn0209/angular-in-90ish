export type Todo = {
  userId: number;
  completed: boolean;
  title: string;
  id: number;
};



////what is type in angular? 
// Summary
// In short, "type" in Angular most commonly refers to TypeScript types, but it’s also key in:

// Declaring components, directives, services (class types)

// Providing metadata to Angular’s DI system

// Using generic types in Angular services like HttpClient or Forms

// Let me know if you meant a specific context like templates, directives, or dependency injection!



// type Todo --> is a TypeScript type alias declaration, and it's commonly used in Angular (and general TypeScript) to define the structure of an object — in this case, a Todo item.

// 🔍 Breakdown:
// export — Makes the type available to other files/modules (you can import it elsewhere).

// type Todo = { ... } — Declares a type alias named Todo.

// Inside the curly braces { ... }, it defines the expected shape of a Todo object.

// 🎯 Use Case in Angular:
// You might use this Todo type:

// When getting todos from an API (e.g. with HttpClient)

// In a component or service to type-check data

// In forms or state management

