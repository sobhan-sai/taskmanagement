import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 

  backlog:any=[];
  todo:any=[];
  inprogress:any=[];
  done:any=[];
  addTask(taskname:string,taskdesc:string,tasktype:string){
    let movie:any={};
    movie.taskname=taskname;
    movie.taskdesc=taskdesc;
    console.log(tasktype);
    movie.tasktype=tasktype;
    if(movie.tasktype==='Backlog'){
    this.backlog.push(movie);
    }
    if(movie.tasktype==='Todo'){
      this.todo.push(movie);
      }
     
    if(movie.tasktype==='Inprogress'){
      this.inprogress.push(movie);
      }
      if(movie.tasktype==='done'){
        this.done.push(movie);
        }
 }

 getAllBacklogTasks(){
   return this.backlog;
 }
 getAllDoneTasks(): any {
  return this.done;
}
getAllInprogressTasks(): any {
  return this.inprogress;
}
getAllTodoTasks(): any {
  return this.todo;
}

  constructor() { }


}
