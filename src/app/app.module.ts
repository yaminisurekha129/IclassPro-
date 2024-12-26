import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { AuthorizationService } from './authorization.service';
import { provideHttpClient,withFetch } from '@angular/common/http';
import { RoleComponent } from './role/role.component';
import { DetailsComponent } from './details/details.component'; 


const routes:Routes=[

  
  {path:"",component:LoginComponent},
  
  {path:"signup",component:SignupComponent,
    children:[{path:"login",component:LoginComponent}
  ]},

  {path:"login",component:LoginComponent,
    children:[{path:"signup",component:SignupComponent}
  ]},

  // { path: "login", component: LoginComponent, children: [{ path: "task", component: TaskComponent }] },

  { path: "task", component: TaskComponent },

  { path: "role", component: RoleComponent },

  {path: "details", component:DetailsComponent}





]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TaskComponent,
    RoleComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule, 

  ],

  providers: [
    AuthorizationService,
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
