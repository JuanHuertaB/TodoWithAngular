import { Injectable } from '@angular/core';
import {Todo} from './todo';
@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todos: Todo[];
  private nextId: number;

  constructor() { 
    this.todos=[
      new Todo(0,"Hacer la tarea",false),
      new Todo(1,"Estudiar ES6",false),
      new Todo(2,"Estudiar Angular",false)
    ];

    this.nextId =3;
  }

  public addTodo(text:string): void{
    console.log(this.todos);
    let todo = new Todo(this.nextId, text, false);
    this.todos.push(todo);
    this.nextId++;
  }

  public allTodos(): Todo[]{
    return this.todos;
  }

  public deleteTodo(id: number):void{
    this.todos = this.todos.filter((todo) => todo.id !== id);
  } 
}
