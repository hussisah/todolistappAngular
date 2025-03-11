//Import Statements
import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
// Decorator
@Component({
  selector: 'app-root',
  imports: [  TodoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Class Definition
export class AppComponent {
  title = 'todo-list-app'; //the app title 
}
