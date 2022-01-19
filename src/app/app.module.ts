// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GraphQLModule } from './graphql.module';

// Components
import { AppComponent } from './app.component';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { NewToDoFormComponent } from './components/new-to-do-form/new-to-do-form.component';
import { NewToDoModalComponent } from './components/new-to-do-modal/new-to-do-modal.component';

// Services
import { ToDosDataService } from './services/to-dos-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    GraphQLModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    ToDoItemComponent,
    ToDoListComponent,
    NewToDoFormComponent,
    NewToDoModalComponent,
  ],
  providers: [ToDosDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
