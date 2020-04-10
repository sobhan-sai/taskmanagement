import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  City: any = ['Backlog', 'Todo', 'Inprogress', 'done']
  appUser:Task;
  constructor(private router:Router, private taskServuce:TaskService) { }

  form=new FormGroup({
    taskname: new FormControl('', Validators.required),
    taskdesc: new FormControl('', Validators.required),
    tasktype: new FormControl()
  });
  get taskname(){
    return this.form.get('taskname')
  }
  get taskdesc(){
    return this.form.get('taskdesc')
  }
  get tasktype(){
    return this.form.get('tasktype')
  }





  ngOnInit() {
  }

  onSubmit(){
    console.log("onsubmit");
 console.log(this.tasktype.value);
    this.taskServuce.addTask(this.taskname.value,this.taskdesc.value,this.tasktype.value);
    this.router.navigate(['']);
  }
}
