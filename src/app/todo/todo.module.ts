import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddEditTodoComponent } from './add-edit-todo/add-edit-todo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodoListComponent, AddEditTodoComponent],
  exports: [TodoListComponent, AddEditTodoComponent]
})
export class TodoModule { }
