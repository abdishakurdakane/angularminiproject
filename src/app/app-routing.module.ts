import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UsersComponent } from './users/users.component';
import { SingleuserComponent } from './singleuser/singleuser.component';

import { AllpostComponent } from './allpost/allpost.component';
const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'home',component:HomeComponent },
  { path:'contactus' ,component: ContactusComponent  },
  { path: 'users', component:UsersComponent  },
  { path: 'singleuser', component:SingleuserComponent  },
 
  { path:'allpost',component:AllpostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
