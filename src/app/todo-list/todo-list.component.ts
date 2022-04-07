import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { v4 } from 'uuid';

type Todo = {
  id: string,
  name: string,
  done: boolean
}


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todoList: Todo[] = []

  checkoutForm = this.formBuilder.group({
    name: ''
  })

  constructor( private formBuilder:FormBuilder ) { }


  onSubmit(): void {
    console.log(this.checkoutForm.value)

    this.todoList.push({
      id: v4(),
      name: this.checkoutForm.value.name,
      done: false
    })

    this.checkoutForm.reset()
  }

  toggle(id: string): void{
    this.todoList = this.todoList.map(v => ({
      ...v,
      done: v.id === id ? !v.done: v.done
    }))
  }

}
