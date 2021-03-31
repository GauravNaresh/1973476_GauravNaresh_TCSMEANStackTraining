import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
tasks: Array<any> = [];
displayedColumns: string[] = ['id', 'name', 'task', 'deadline'];
  constructor(public taskserv: TaskService) { }

  ngOnInit(): void {
this.taskserv.getTasks().subscribe(result => this.tasks =result);
  }
  submitTask(taskRef: any) {
    this.taskserv.storeTask(taskRef);
  }
}
