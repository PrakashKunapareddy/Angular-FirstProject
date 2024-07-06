import { Component } from '@angular/core';
import { ButtonUDComponent } from '../../button-ud/button-ud.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formexample',
  standalone:true,
  templateUrl: './formexample.component.html',
  styleUrl: './formexample.component.css',
  imports:[ButtonUDComponent,FormsModule]
})
export class FormexampleComponent {

  myForm!:NgForm
  onSubmit(form:NgForm){
    console.log(form.value);
    console.log("Subbmittted the form")
  }
}
