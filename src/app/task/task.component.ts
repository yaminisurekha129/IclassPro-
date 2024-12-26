import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';
import { TaskResponse } from '../models/task.model';

@Component({
  selector: 'app-task',
  standalone:false,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {

  tasks: TaskResponse | null = null;

  constructor(private taskService: RoleService){}

  ngOnInit(): void{
    this.getTasks();
  }

  getTasks():void{
    this.taskService.getTasks().subscribe(
      (data)=>{
        console.log("Fetched tasks:",data);
        this.tasks=data;
        console.log(this.tasks);
      },

      (error)=>{
        console.error('Error fetchimg tasks:',error);
      }

     
    );

  }

 
 
}
