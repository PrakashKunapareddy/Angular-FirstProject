import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  username: string;
  password: string;

  constructor() { }

  login() {
    // Here you can add your login logic
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
