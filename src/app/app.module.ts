import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CounterComponent } from './counter/counter.component';
import {RouterModule, Routes} from '@angular/router'
import { LayoutComponent } from './layout/layout.component';
import { TodoComponent} from './todo/todo.component';
import { InputTodoComponent } from './input_todo/input_todo.component';
import { TodoListService} from './todo-list.service';
import {ItemTodoComponent} from './item_todo/item_todo.component';

const routes: Routes=[
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: CounterComponent
      }
    ]
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'todo', // http://localhost:port/todo
component: LayoutComponent,
children:[
    {
        path: '', //http://domain/todo/list
        component: TodoComponent
    },
]
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CounterComponent,
    LayoutComponent,
    TodoComponent,
    InputTodoComponent,
    ItemTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    

  ],
  providers: [
    TodoListService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

//export class Person from ''