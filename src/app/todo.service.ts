import { Injectable } from '@angular/core';
import { Todo } from './models/todo.model';

@Injectable({
  providedIn: 'root'
})
//Defines the Service Class
export class TodoService {
  todos: Todo[] = [
    { id: 1, title: 'Learn Angular', completed: true },
    { id: 2, title: 'Build an app', completed: true },
  ];

  //Returns the current list of tasks.
  getTodos(): Todo[] {
    return this.todos;
  }
// Creates a new task and adds it to the list
  addTodo(title: string) {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      title,
      completed: false,
    };
    this.todos.push(newTodo);
  }
//Removes a task based on its id
  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
//Marks a task as complete/incomplete
  toggleComplete(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

}
