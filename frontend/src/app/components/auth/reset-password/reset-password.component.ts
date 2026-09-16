import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { passwordStrengthValidator } from 'src/app/shared/validators/password-strength.validators';
import { mustMatchPassword } from 'src/app/shared/validators/mustMatchPassword.validators';
import { MatInput } from '@angular/material/input';

import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
    imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInput,
    RouterLink
]
})
export class ResetPasswordComponent {
  fb = inject(FormBuilder)
  route = inject(ActivatedRoute)
  router = inject(Router)
  authService = inject(AuthService)
  resetMode = false;

  resetForm = this.fb.group({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
  });

  changeForm = this.fb.group({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    temporarypassword: new FormControl<string>('', [Validators.required]),
    newpassword: new FormControl<string>('', [Validators.required, Validators.minLength(8), passwordStrengthValidator]),
    confirmpassword: new FormControl<string>('', [Validators.required, Validators.minLength(8), mustMatchPassword('newpassword', 'confirmpassword')]),
  });


  startReset() {
    if (this.resetForm.invalid) {
      return;
    }
    const email = this.resetForm.get('email')?.value!;
    this.authService.resetPassword(email).subscribe(() => {
      this.resetForm.reset();
      this.resetMode = true;
    });
  }

  changepasswordForm(switchBool: boolean) {
    this.resetMode = switchBool;
  }

  changepassword() {
    if (this.changeForm.invalid) {
      return;
    }

    const email = this.changeForm.get('email')?.value!;
    const temporarypassword = this.changeForm.get('temporarypassword')?.value!;
    const newpassword = this.changeForm.get('newpassword')?.value!;
    const confirmpassword = this.changeForm.get('confirmpassword')?.value!;

    if (newpassword !== confirmpassword) {
      return;
    }

    this.authService.changePassword(email, temporarypassword, newpassword).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
