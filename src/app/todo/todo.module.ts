import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddEditTodoComponent } from './add-edit-todo/add-edit-todo.component';

import { TodoService } from './todo.service';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [TodoListComponent, AddEditTodoComponent],
  exports: [TodoListComponent, AddEditTodoComponent],
  providers: [TodoService]
})
export class TodoModule { }
