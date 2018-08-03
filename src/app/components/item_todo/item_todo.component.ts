import { Component, OnInit, Input } from "@angular/core";
import {TodoListService } from '../../todo-list.service';
import { Todo } from "../../classes/todo";
 
@Component({
    selector: 'app-item-todo',
    templateUrl: './item_todo.component.html',
    styleUrls: ['../../app.component.css']
})

export class ItemTodoComponent implements OnInit{
    
    //@Input()
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