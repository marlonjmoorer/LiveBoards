import { Component, OnInit } from '@angular/core';
import { Topic } from "app/Models/Topic";
import { Post } from "app/Models/Post";
import { TopicService } from "app/Services/Topic.service";


@Component({
  selector: 'app-topicform',
  templateUrl: './TopicForm.component.html',
  styleUrls: ['./TopicForm.component.css']
})
export class TopicFormComponent implements OnInit {

  topic= new Topic(0);

  post= new Post();

  constructor(private topicService:TopicService) { }

  ngOnInit() {
  }
  isValid():boolean{
      return this.topic.title!=''&&this.post.body!=''

  }
  onSubmit(){
        console.log({topic:this.topic,post:this.post})
        if (this.isValid){

          this.topic.date_posted= new Date();
          this.topic.lastPostDate= new Date();
          this.post.create_date=new Date();
          var data ={
            topic:this.topic,
            post:this.post,
            token:localStorage.getItem("id_token")
          }
          this.topicService.createTopic(data).subscribe((res)=>{


          })
        }
  }

}