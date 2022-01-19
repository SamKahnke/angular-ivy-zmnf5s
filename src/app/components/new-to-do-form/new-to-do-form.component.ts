import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToDosDataService } from '../../services/to-dos-data.service';
import { NewToDoModalComponent } from '../new-to-do-modal/new-to-do-modal.component';

@Component({
  selector: 'new-to-do-form',
  templateUrl: './new-to-do-form.component.html',
  styleUrls: ['./new-to-do-form.component.css'],
})
export class NewToDoFormComponent implements OnInit {
  toDoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newToDoModalComponent: NewToDoModalComponent,
    private toDosDataService: ToDosDataService
  ) {}

  ngOnInit() {
    this.toDoForm = this.formBuilder.group({
      title: '',
      description: '',
    });
  }

  async submitForm() {
    this.toDosDataService.addToDo(this.toDoForm).subscribe();
    await this.newToDoModalComponent.closeModal();
  }
}
