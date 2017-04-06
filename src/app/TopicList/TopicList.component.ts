import { Component, OnInit } from '@angular/core';
import {TopicService } from '../Services/Topic.service'

import { Topic } from "app/Models/Topic";
import { tokenNotExpired } from "angular2-jwt"
import { UserManagmentService } from "app/Services/UserManagment.service";
@Component({
  selector: 'app-topiclist',
  templateUrl: './TopicList.component.html',
  styleUrls: ['./TopicList.component.css']
})
export class TopicListComponent implements OnInit {
  topics:Topic[]
  constructor(private ts:TopicService,private um:UserManagmentService) { }

  ngOnInit() {
    this.ts.getTopics().subscribe(data=>{
      this.topics=data
    })
    
  }
  
}