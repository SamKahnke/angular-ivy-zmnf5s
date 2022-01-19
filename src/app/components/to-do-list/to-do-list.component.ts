import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../../types';
import { ToDosDataService } from '../../services/to-dos-data.service';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
})
export class ToDoListComponent implements OnInit {
  toDoItems: ToDoItem[];

  constructor(private toDosDataService: ToDosDataService) {}

  async ngOnInit(): Promise<void> {
    this.toDosDataService.refreshNeeded$.subscribe(() => {
      this.toDosDataService.refetchToDos();
    });
    this.getAllTodos();
  }

  private getAllTodos() {
    this.toDosDataService.getToDos().subscribe(({ data }) => {
      this.toDoItems = data.toDos;
    });
  }
}
