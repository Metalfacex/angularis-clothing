import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthService} from '../../services/auth.service';
import {IUsers} from '../../interfaces/users-interface';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  imports: [RouterLink,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private authService: AuthService) { }

  registerForm: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onSubmit() {
    if (this.registerForm.valid) {
      const user: IUsers = this.registerForm.value;
      this.authService.signUp(user)
    }
  }
}
