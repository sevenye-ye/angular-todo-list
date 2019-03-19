import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../_interface/todo';
  import { from } from 'rxjs';

@Component({
  selector: 'app-template-todo',
  templateUrl: './template-todo.component.html',
  styleUrls: ['./template-todo.component.sass']
})
export class TemplateTodoComponent implements OnInit {

  public toDo$: ToDo;

  constructor() {
    this.toDo$ = {
      id: 1,
      label: 'wie gehts',
      status: true,
      position: 1
    };
  }

  ngOnInit() {
  }

  public changeCheck(event?: any): void{
    this.toDo$.status = !this.toDo$.status;
    console.log(this.toDo$.status);
  }

}
