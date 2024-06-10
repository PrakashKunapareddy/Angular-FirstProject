import { Component, NgModule } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-user',
  standalone:true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports:[CommonModule,BrowserModule]
})


export class UserComponent {
   selectedUsers:any = [];
   RandomUsers:any;

  constructor(){
   this.selectedUsers = DUMMY_USERS;
   this.RandomUsers= Math.floor(Math.random()*this.selectedUsers.length);
  }
  randomChange(): void {
    this.RandomUsers= Math.floor(Math.random()*this.selectedUsers.length);
   }

}
