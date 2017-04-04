import { Component, OnInit } from '@angular/core';
import { UserManagmentService } from "app/Services/UserManagment.service";
import { Subscription } from "rxjs/Subscription";
import { UserFormComponent } from './UserForm/UserForm.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit  {
  subscription:Subscription;
  constructor(private userService:UserManagmentService) {
      
   }
   ngOnInit() {
      this.subscription= this.userService.$logedIn.subscribe((res)=>{
        console.log("subed "+res)
      })
   }
   
   onLogin(event:boolean){
      console.log('event')
   }
}
