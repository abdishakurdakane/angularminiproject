import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../shared/apidata.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   
  allusers: any  = [];
  isloading :boolean = true
  single ='';
  constructor( private apidaService: ApidataService, private route: Router  ) { }

  ngOnInit(): void {
  this.apidaService.getAllusers_API()   
  .then((result: any) => {
   
    this.allusers = result;
    this.isloading = false;
    console.log(result);
  }).catch((err: any) => {
  
    console.log(err);
  })

// starts here 
// this.route.queryParams.subscribe((param: { id: any; }) => {
//   this.apidaService.getAllusers_API(param.id)
// .then((result )=> {

//   this.single = result;
// }).catch(err => {
//   // this.isLoading = false;
//   console.log(err);
// })
// });


// // ends here

// starts here 
//     viewUser(user:any)  
// {
//   this.route.navigateByUrl('singleuser?id='+user.id);
// }

// ends here 

// 
}
viewUser(user:any)
{
  this.route.navigateByUrl('singleuser?id='+user.id)
  // this.apiData.getUserPost_API(user.id)
  //   .then(result => {
  //     console.log(result); 
  //   })
}

//

 


  // getSingleuser(id:any){
  //   this.apidaService.getSingleuser_API(id)   
  //   .then((result: any) => {
     
  //     this.single = result;
     
  //     console.log(id);
  //   }).catch((err: any) => {
    
  //     console.log(err);
  //   })
  // }

}










