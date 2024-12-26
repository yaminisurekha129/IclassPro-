import { Component } from '@angular/core';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-details',
  standalone: false,
  
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  details:any[]=[];

  constructor(private detailService: RoleService){}

  ngOnInit(): void{
    this.getDetails();
  }

  getDetails():void{
    this.detailService.getDetails().subscribe(
      (data)=>{
        console.log("Fetched details:",data);
        this.details=data;
      },
      (error)=>{
        console.error('Error fetchimg details:',error);
      }
    );
  }

}

