import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApidataService } from '../shared/apidata.service';
@Component({
  selector: 'app-allpost',
  templateUrl: './allpost.component.html',
  styleUrls: ['./allpost.component.css']
})
export class AllpostComponent implements OnInit {
  allpost:any=[];
  isloading:boolean=true;
  constructor( private apiservice: ApidataService,  private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.apiservice.getAllPosts_API()
    .then((result: any) => {
      this.isloading = false
      this.allpost = result;
       
      console.log(result);
    }).catch((err: any) => {
      this.isloading = false
      console.log(err);
    })
  }

}
