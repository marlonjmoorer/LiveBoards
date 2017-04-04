import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from "app/Models/User";
import { UserManagmentService } from "app/Services/UserManagment.service";
import { tokenNotExpired } from 'angular2-jwt';

@Component({
  selector: 'app-userform',
  templateUrl: './UserForm.component.html',
  styleUrls: ['./UserForm.component.css'],
  //outputs:["notifyLogin"]
})
export class UserFormComponent implements OnInit {
  @Output() notifyLogin: EventEmitter<boolean> = new EventEmitter();
  constructor(private userService:UserManagmentService) {
      
   }

  private model:User= new User('','')
  private message:string;
  

  ngOnInit() {

  }
  isValid(){
    
    return this.model.username!=''
      &&this.model.password!=''
  }
  
  onSubmit(){
    this.message='';
    if(this.isValid()){
      this.userService.login(this.model).subscribe((res)=>{
         
         if(!res.success){
           this.message=res.message
           
         }else{
           this.notifyLogin.next(res.success)
           this.model.username=''
           this.model.password=''
          
         }
      })
    }
  }

}