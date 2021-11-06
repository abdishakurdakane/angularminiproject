import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../shared/apidata.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   
  allusers: any  = [];
 
  constructor( private apiservice: ApidataService  ) { }

  ngOnInit(): void {
  this.apiservice.getAllusers_API()   
  .then((result: any) => {
   
    this.allusers = result;
    console.log(result);
  }).catch((err: any) => {
  
    console.log(err);
  })
  


  }

}
