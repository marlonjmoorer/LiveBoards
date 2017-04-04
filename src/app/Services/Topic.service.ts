import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from "@angular/http"
import 'rxjs/Rx';

import { Observable } from 'rxjs/Rx';
import { Topic } from "app/Models/Topic";


@Injectable()
export class TopicService {

    constructor(private http:Http) { }

    getTopics():Observable<Topic[]>{
        return this.http.get("/api/getTopics")
                .map((response:Response)=>{
                    let body=response.json()
                    var topics:Topic[]= new Array<Topic>();
                    console.log(body)
                    for(let item of body){
                        topics.push(new Topic(
                            item.id,
                            item.title,
                            item.created_by                         
                        ))
                    }    
                    return topics
                })
    }

     getTopicById(id){

        let params = new URLSearchParams();
        params.set("id", id);
        let options = new RequestOptions({
          search: params// <-----
        });
        return this.http.get(`/api/getTopic/${id}`)
                .map((response:Response)=>{
                    let body=response.json()
                   
                    console.log(body)
                     
                    return body
                })
    }


    createTopic(data){
        console.log(data)
        return this.http.post("/api/createTopic",data).map((res)=>{
                return res;
        })
    }


}