import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html'
})

export class SignupScreenComponent implements OnInit {
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl(null, Validators.required),
      passwordRe: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const {firstName, lastName, email, password, passwordRe} = this.signupForm.value;
    if(this.signupForm.valid && password === passwordRe) {
      const user = new User(email, password, firstName, lastName);
      console.log(user);
    }
  }
}
