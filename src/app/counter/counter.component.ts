import {Component} from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})

export class CounterComponent{
    
    public title: string = '';
    public counter: number = 0;
    
    constructor(){
        this.title = 'Eventos';

    }

    public increment($event){
        console.log($event);
        this.counter +=1;
    }

    public decrement($event){
        
        if(this.counter >0){
            this.counter -=1;
        }
}
   public reset($event){
    console.log($event);
    this.counter = 0;

    }
    public sender($event){
        console.log($event.target.value);
    }

}