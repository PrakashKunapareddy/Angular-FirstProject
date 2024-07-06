import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Directive, ElementRef, HostListener } from '@angular/core';


@Component({
  selector: 'app-temp-driven-form',
  templateUrl: './temp-driven-form.component.html',
  styleUrl: './temp-driven-form.component.css'
})

export class TempDrivenFormComponent {
  eye = "HIDE";
  type = "text";
  UserDataObj;
  username: string;
  Email: any;
  phoneNumber: string = '';
  SelectCourse: any;
  Password: any;
  printUsername: any;
  printEmail: any;
  printCourse: any;
  printPhoneNumber: any;
  printPassword: any;
  errorMessage = "This Field is Required!";
  errorMessage1 = "Data Is Invalid";


  userData = {
    "username": "",
    "email": ""
  }

  FormFillingData =
    [
      "Username:",
      "Email:",
      "Phone Number:",
      "Course Type:",
      "Password:",
    ];


  passwordField = document.getElementById(this.FormFillingData[4]) as HTMLElement;
  passWordEYE = "bi bi-eye-slash";

  ngOnInit(): void {
    this.viewData();
  }

  myForm!: NgForm
  view(form: NgForm) {
    var UserData = {
      Username: this.username,
      Email: this.Email,
      PhoneNumber: this.phoneNumber,
      CourseType: this.SelectCourse,
      Password: this.Password
    };
    console.log(form);

    this.UserDataObj = UserData;
    this.printUsername = form.controls.username.value
    this.printEmail = form.controls.Email.value
    this.printPhoneNumber = this.phoneNumber;
    this.printPassword = form.controls.Password.value

    console.log(UserData);

  }


  viewData() {
    if (this.type === 'text') {
      this.type = 'password'
      this.eye = "VIEW";
      this.passWordEYE = "bi bi-eye-slash";

    } else {
      this.type = "text";
      this.eye = "HIDE";
      this.passWordEYE = "bi-eye";
    }
  }

  onKeyPress(event: KeyboardEvent) {
    const allowedChars = /[0-9]/;
    const key = event.key;

    if (!allowedChars.test(key)) {
      event.preventDefault();
    }
  }

  onlyAlphabets(event: KeyboardEvent) {
    const allowedChars = /[a-zA-Z ]/;
    const key = event.key;

    if (!allowedChars.test(key)) {
      event.preventDefault();
    }

  }
}
