import { Component, OnInit, Input } from "../../../node_modules/@angular/core";
import {TodoListService } from '../todo-list.service';
import { Todo } from "../todo";
 
@Component({
    selector: 'app-item-todo',
    templateUrl: './item_todo.component.html'
})

export class ItemTodoComponent implements OnInit{
    
    @Input()
    private todo: Todo;

    constructor(private todoService: TodoListService){

    }

    ngOnInit(){

    }

    private deleteTodo(): void{
        console.log(this.todo.id);
        //this.todoService.deleteTodo(this.todo.id);
    }
}