import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from "app/Services/Topic.service";
import { Topic } from "app/Models/Topic";

@Component({
  selector: 'app-topic',
  templateUrl: './Topic.component.html',
  styleUrls: ['./Topic.component.css']
})
export class TopicComponent implements OnInit {
  id:number;
  isNew:boolean
  topic:Topic
  post:any[]
  constructor(private route:ActivatedRoute,private topicService:TopicService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      this.id= params['id']||null
      console.log(params)
      if (this.id==null){
         this.isNew=true 
      }else{
        this.topicService.getTopicById(this.id).subscribe((data)=>{
          this.topic=data.topic
          this.post=data.posts
          console.log(" Done")
        })
      }
    })
  }

}