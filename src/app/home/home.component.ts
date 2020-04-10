import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  presentations = [1,2,3,4,5,6,7];
  backlogTasks:any=[];
  todoTasks:any=[];
  inprogresstasks:any=[];
  donetasks:any=[];
  constructor(private service:TaskService) { 
    this.backlogTasks=this.service.getAllBacklogTasks();
    this.todoTasks=this.service.getAllTodoTasks();
    this.inprogresstasks=this.service.getAllInprogressTasks();
    this.donetasks=this.service.getAllDoneTasks();
    console.log(this.todoTasks[0]);
  }

  ngOnInit() {
   
  }

}
