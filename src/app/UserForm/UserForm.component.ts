import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from "app/Models/User";
import { UserManagmentService } from "app/Services/UserManagment.service";
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userform',
  templateUrl: './UserForm.component.html',
  styleUrls: ['./UserForm.component.css'],
  //outputs:["notifyLogin"]
})
export class UserFormComponent implements OnInit {
  constructor(private userService:UserManagmentService,private router:Router) {
      
   }

  private model:User= new User('','')
  private message:string;
  

  ngOnInit() {
    if(this.userService.isLogedIn){
      this.router.navigate(["/"])
    }

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
          this.router.navigate(["/"])
           console.log("redirect")
           this.model.username=''
           this.model.password='' 
         }
      })
    }
  }

}