import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(public http: HttpClient) { }


storeTask(task:any){
  this.http.post("http://localhost:3000/tasks", task).subscribe(result =>console.log(result));
}

getTasks(){
  return this.http.get<Task[]>("http://localhost:3000/tasks");
}
}