import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeworkComponent } from '../homework/homework.component';

@Component({
  selector: 'app-homework-two',
  standalone:true,
  templateUrl: './homework-two.component.html',
  styleUrl: './homework-two.component.css',
  imports:[CommonModule,BrowserModule,HomeworkComponent]
})
export class HomeworkTwoComponent {

}
