import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-role',
  standalone: false,
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent implements OnInit {
  roles:any[]=[];

  constructor(private roleService: RoleService){}

  ngOnInit(): void{
    this.getRoles();
  }

  getRoles():void{
    this.roleService.getData().subscribe(
      (data)=>{
        console.log("Fetched roles:",data);
        this.roles=data;
      },
      (error)=>{
        console.error('Error fetchimg roles:',error);
      }
    );
  }
}
