import { Injectable, EventEmitter } from '@angular/core';
import { Http,Response} from "@angular/http"
import 'rxjs/Rx';

import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { User } from "app/Models/User";
import { LoginResponse } from "app/Models/LoginResponse";
import { tokenNotExpired } from "angular2-jwt/angular2-jwt";


@Injectable()
export class UserManagmentService {

    constructor(private http:Http) { }
    private logedIn=new BehaviorSubject<boolean>(false)

    $logedIn =this.logedIn.asObservable();

    login(user:User):Observable< LoginResponse>{
        user.create_date=new Date();
        console.log(JSON.stringify(user))
        return this.http.post("/api/login",user)
                .map((res:Response)=>{
                    let body= res.json();
                    console.log(res.json())
                    if(body.success){
                        localStorage.setItem('id_token', body.token);
                        this.logedIn.next(true)
                        console.log('sent')
                    };
                    return body
                })
    }

    get isLogedIn(){
        return tokenNotExpired("id_token")
    }
   


}