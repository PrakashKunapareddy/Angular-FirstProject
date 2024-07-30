import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { findIndex } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {

  signUpForm: FormGroup;
  dropdownDefaultSelect = 'Select Course';
  errorMessage = "This Field is Required!";
  errorMessage1 = "Data Is Invalid";
  type = "text";
  passWordEYE;
  printUsername: any;
  printEmail: any;
  printPhoneNumber: any;
  printPassword: any;
  printLanguages: any;


  ngOnInit() {
    this.signUpForm = new FormGroup({
      'Username': new FormControl(null, [Validators.required, Validators.maxLength(15)]),
      'Email': new FormControl(null, [Validators.required, Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]),
      'Phone Number': new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.pattern(/[0-9]{10}/)]),
      'Select Course': new FormControl(this.dropdownDefaultSelect, [Validators.required]),
      'Password': new FormControl(null, [Validators.required, Validators.maxLength(15), Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/)]),
      'Languages': new FormArray([])
    })
    this.viewData();
  }




  OnAddLanguage() {
    const addLang = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('Languages')).push(addLang);
    console.log(this.signUpForm.get('Languages'));
    console.log(this.signUpForm.get('Languages').valid);

  }

  get getLanguages() {
    return (this.signUpForm.get('Languages') as FormArray);
  }

  formControlErrorsInFormArray(Index: number) {
    if ((this.signUpForm.get('Languages') as FormArray).controls.at(Index).invalid && (this.signUpForm.get('Languages') as FormArray).controls.at(Index).touched) {
      return true;
    }
    return false;
  }

  viewData() {
    if (this.type === 'text') {
      this.type = 'password'
      this.passWordEYE = "bi bi-eye-slash";

    } else {
      this.type = "text";
      this.passWordEYE = "bi-eye";
    }
  }


  addButtonValidate() {
    return this.signUpForm.get('Languages').invalid;
    // const val: any[] = (this.signUpForm.get('Languages') as FormArray).value
    // for (let i = 0; i < val.length; i++) {
    //   if (val[val.length - 1] === null) {
    //     return true;
    //   }
    //   else {
    //     return false;
    //   }
    // }
  }
  usernamePatternError() {
    return this.signUpForm.get('Username').errors?.pattern;
  }

  get phoneNumberInvalidFirstDigit() {
    const phoneNumberValue = this.signUpForm.get('Phone Number').value;
    if (phoneNumberValue && phoneNumberValue.length === 10) {
      const firstDigit = phoneNumberValue.charAt(0);
      return !(firstDigit === '9' || firstDigit === '8' || firstDigit === '7');
    }
    return false;
  }



  deleteField(Index: number) {
    console.log("Clicked Delete Icon");
    (this.signUpForm.get('Languages') as FormArray).removeAt(Index);

  }
  onlyAlphabets(event: KeyboardEvent) {
    const allowedChars = /[a-zA-Z ]/;
    const key = event.key;

    if (!allowedChars.test(key)) {
      event.preventDefault();
    }
  }
  onlyNumbers(event: KeyboardEvent) {
    const allowedChars = /[0-9]/;
    const key = event.key;

    if (!allowedChars.test(key)) {
      event.preventDefault();
    }
  }
  OnSubmit() {
    console.log(this.signUpForm);
    this.printUsername = this.signUpForm.get('Username').value;
    this.printEmail = this.signUpForm.get('Email').value;
    this.printPhoneNumber = this.signUpForm.get('Phone Number').value;
    this.printPassword = this.signUpForm.get('Password').value;
    console.log(this.printUsername = this.signUpForm.get('Username').value);
    console.log(this.printEmail = this.signUpForm.get('Email').value);
    console.log(this.printPhoneNumber = this.signUpForm.get('Phone Number').value);
    console.log(this.printPassword = this.signUpForm.get('Password').value);
    console.log(this.printLanguages = this.signUpForm.get('Languages').value)

  }


}
