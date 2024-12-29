import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';
import { TaskResponse } from '../models/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone:false,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {

  tasks: TaskResponse | null = null;
  Allusers: any[] = [];
  Alltasks:any[]=[];
  savedInfo: string = ''; 

  selectedUser: string='';   
  selectedTask: any = null;



  constructor(private taskService: RoleService,private x:TaskService){}

  ngOnInit(): void{
    this.getTasks();
    this.getUsers();
    this.getTask();
    // this.addTask();
   
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

  getUsers():void{
    this.x.getUsers().subscribe(
      (data:string[])=>{
        console.log('Fetched users:',data);
        this.Allusers=data;
        console.log(this.Allusers);
      }

    )
  }

  getTask():void{
    this.x.getAllTask().subscribe(
      (data:any)=>{
        console.log('Fetched tasks:',data);
        this.Alltasks=data;
        console.log(this.Alltasks);
      }

    )
  }

  addTask(): void {
    const payload = {
      user_id: this.selectedUser,
      task_id: this.selectedTask,
    };

    this.x.addTask(payload).subscribe(
      (response) => {
        console.log('Task added successfully:', response);
        
        this.getTasks();
        // this.savedInfo = `User: ${this.selectedUser}, Task: ${this.selectedTask}`;
      },
      (error) => {
        console.error('Error adding task:', error);
      }
    );
  }


  saveSelection(): void {
    console.log('Selected User:', this.selectedUser);
    console.log('Selected Task:', this.selectedTask);
    console.log(this.savedInfo);
    this.savedInfo=`User: ${this.selectedUser}, Task: ${this.selectedTask}`;
    console.log(this.savedInfo);
  }


  onTaskSelect(): void {
    console.log('Selected Task:', this.selectedTask);  
  }
  
  

  

  





 
 
}
