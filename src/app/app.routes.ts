import { Routes } from "@angular/router/src";
import { TopicListComponent } from "app/TopicList/TopicList.component";
import { TopicComponent } from "app/Topic/Topic.component";
import { UserFormComponent } from "app/UserForm/UserForm.component";

export const routes: Routes= [
      {
        path:"",
        component:TopicListComponent
      },
      {
        path:"topic",
        component:TopicComponent
      },
      
      {
        path:"login",
        component:UserFormComponent
      }
]