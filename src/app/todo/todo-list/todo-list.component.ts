import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';

import { ITodo } from '../../shared/interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: ITodo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos()
      .subscribe((data: ITodo[]) => {
        this.todos = data;
        console.log(this.todos);
      });
  }

}
