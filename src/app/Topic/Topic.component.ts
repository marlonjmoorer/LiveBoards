import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from "app/Services/Topic.service";
import { Topic } from "app/Models/Topic";
import { Post } from "app/Models/Post";

@Component({
  selector: 'app-topic',
  templateUrl: './Topic.component.html',
  styleUrls: ['./Topic.component.css']
})
export class TopicComponent implements OnInit {
  id:number;
  isNew:boolean
  topic:Topic= new Topic(0)
  postList:Post[]
  constructor(private route:ActivatedRoute,private topicService:TopicService) { }

  ngOnInit() {


    this.route.queryParams.subscribe(params=>{
      this.id= params['id']||null
      console.log("id is "+ params['id'])
      if (this.id==null){
         this.isNew=true 
         console.log("NEw post")
      }else{
        this.topicService.getTopicById(this.id).subscribe((data)=>{
          this.topic=data.topic
          this.postList=data.posts
          this.isNew=false;
          console.log(this.postList)
        })
      }
    })
  }

}