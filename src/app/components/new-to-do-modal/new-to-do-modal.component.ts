import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewToDoFormComponent } from '../new-to-do-form/new-to-do-form.component';

@Component({
  selector: 'new-to-do-modal',
  templateUrl: './new-to-do-modal.component.html',
  styleUrls: ['./new-to-do-modal.component.css'],
})
export class NewToDoModalComponent {
  constructor(private modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: NewToDoFormComponent,
    });
    return await modal.present();
  }

  public closeModal() {
    this.modalController.dismiss();
  }
}
