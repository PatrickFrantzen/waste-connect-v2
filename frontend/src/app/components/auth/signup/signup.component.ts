import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { RouterLink } from '@angular/router';
import { passwordStrengthValidator } from 'src/app/shared/validators/password-strength.validators';

import { MatInput } from '@angular/material/input';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    imports: [FormsModule, ReactiveFormsModule, MatInput, RouterLink]
})
export class SignupComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);

  signUpForm = this.fb.group({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8),
      passwordStrengthValidator,
    ]),
  });

  signUp() {
    const email = this.signUpForm.get('email')!.value!;
    const password = this.signUpForm.get('password')!.value!;
    this.authService.createUser(email, password);
  }
}
