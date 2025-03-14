import { Injectable } from '@angular/core';
import { Todo } from './models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Build an app', completed: false },
  ];

  constructor() {
    this.GetAll(); // Load todos when service starts
  }

  // Returns the current list of tasks
  getTodos(): Todo[] {
    return this.todos;
  }

  // Creates a new task and adds it to the list
  addTodo(title: string) {
    const newTodo: Todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      title,
      completed: false,
    };
    this.todos.push(newTodo);
    this.Save();
  }

  // Removes a task based on its id
  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  // Marks a task as complete/incomplete
  toggleComplete(id: number) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.Save();
    }
  }

  // Saves todos to local storage
  Save() {
    if (typeof localStorage !== 'undefined') { //it ensures localStorage is available before trying to use it.
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }
}

  // Loads todos from local storage when the app starts
         GetAll() {
    if (typeof localStorage !== 'undefined') {
    let value = localStorage.getItem('todo');
    if (value && value !== 'null' && value !== 'undefined') {
      this.todos = JSON.parse(value);
    } else {
      this.todos = []; // Ensure todos array is always defined
    }
  }
}
}




