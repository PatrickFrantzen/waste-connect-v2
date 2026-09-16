import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatInput } from '@angular/material/input';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [FormsModule, ReactiveFormsModule, MatInput, RouterLink]
})
export class LoginComponent implements OnInit {
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  authService = inject(AuthService);

  loginMode = true;

  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.has('id')) {
        this.loginMode = false;
      }
    });
  }

  login() {
    const { email, password } = this.loginForm.getRawValue();
    this.authService.login(email, password);
  }

  confirmEmail() {
    //get the userId from params  and send it via service to backend
    const userId = this.route.snapshot.paramMap.get('id');
    this.authService.confirmEmail(userId!);
  }
}
