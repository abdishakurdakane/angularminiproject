import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApidataService } from '../shared/apidata.service';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {
id : number=0
isloading:boolean= true;
singleUserpost:any=[];
  constructor(private apiservice: ApidataService,  private route: ActivatedRoute) { }
 
  ngOnInit(): void {
   
    this.route.queryParams.subscribe(param=>{
      console.log(param['id']);
      this.apiservice.getUserSingleuser_API(param['id'])
    .then((result: any) => {
      this.isloading=false;
      this.singleUserpost=result;
      // console.log(result); 
    }).catch((err: any)=>{
      // this.isLoading=false;
      console.log(err);
    });
    })
    
  }

}
