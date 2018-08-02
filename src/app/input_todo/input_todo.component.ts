import { Component, OnInit } from '../../../node_modules/@angular/core';
import { TodoListService } from '../todo-list.service';
@Component({
    selector: 'app-input_todo',
    templateUrl: './input_todo.component.html',
    styleUrls: ['./input_todo.component.css']
})

export class InputTodoComponent implements OnInit{

    public todoText = '';

    constructor(private todoService: TodoListService){
        this.todoText = '';
    }

    ngOnInit(){

    }

    private addTodo(): void{
        this.todoService.addTodo(this.todoText);
        this.todoText = '';
    }
}