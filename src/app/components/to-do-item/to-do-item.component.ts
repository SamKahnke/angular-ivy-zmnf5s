import { Component, Input } from '@angular/core';
import { ToDosDataService } from '../../services/to-dos-data.service';
import { ToDoItem } from '../../types';

@Component({
  selector: 'to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css'],
})
export class ToDoItemComponent {
  @Input() toDoItem: ToDoItem;

  constructor(private toDosDataService: ToDosDataService) {}

  async completeToDo() {
    this.toDosDataService.deleteToDo(this.toDoItem.id).subscribe();
  }
}
