import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo.service';
import { Todo } from '../models/todo.model';
import { FormsModule } from '@angular/forms';
//Component Decorator
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
//Defining the TodoComponent Class
export class TodoComponent implements OnInit {
  //to clear the whole list 
//clearTodos() {
  //localStorage.removeItem('todos');
 // this.todos = [];
//}
  todos: Todo[] = [];
  newTodoTitle: string = '';
//Constructor - Injecting the Service
  constructor(private todoService: TodoService) {}
// Fetches the to-do list when the app starts.

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
// Calls todoService.addTodo() to add a task
  addTodo() {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle);
      this.newTodoTitle = '';
    }
  }
 //  Removes a task from the list
  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.Save();
  }
//  Marks a task as complete or incomplete
  toggleComplete(id: number) {
    this.todoService.toggleComplete(id);
  }

  // Saves todos to local storage
  Save() {
    if (typeof localStorage !== 'undefined') { //it ensures localStorage is available before trying to use it.
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }
}

}




