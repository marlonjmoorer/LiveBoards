import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { TopicListComponent } from './TopicList/TopicList.component';
import { TopicService } from './Services/Topic.service'
import { UserManagmentService } from "app/Services/UserManagment.service";
import { UserFormComponent } from './UserForm/UserForm.component';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { TopicComponent } from './Topic/Topic.component';
import { routes } from "app/app.routes";
import { TopicFormComponent } from './TopicForm/TopicForm.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopicListComponent,
    UserFormComponent,
    TopicComponent,
    TopicFormComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TopicService,UserManagmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
