import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { mustMatchPassword } from 'src/app/shared/validators/mustMatchPassword.validators';
import { passwordStrengthValidator } from 'src/app/shared/validators/password-strength.validators';
import { MatInput } from '@angular/material/input';

import { MatTooltip } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { DialogModule } from '@angular/cdk/dialog';
import { ImageUploadComponent } from 'src/app/shared/components/image-upload/image-upload.component';

import { FirmenprofilComponent } from './profile/firmenprofil/firmenprofil.component';
import { EntsorgerprofilComponent } from './profile/profil/entsorgerprofil.component';
import { LogistikprofilComponent } from './profile/logistikprofil/logistikprofil.component';
import { AuthService } from 'src/app/components/auth/services/auth.service';
import { MyErrorStateMatcher } from 'src/app/shared/validators/error.validators';

@Component({
    selector: 'app-einstellungen',
    templateUrl: './einstellungen.component.html',
    styleUrls: ['./einstellungen.component.scss'],
    imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInput,
    MatTooltip,
    MatFormFieldModule,
    MatSelectModule,
    DialogModule,
    ImageUploadComponent,
    FirmenprofilComponent,
    EntsorgerprofilComponent,
    LogistikprofilComponent
]
})
export class EinstellungenComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  matcher = new MyErrorStateMatcher();

  changePasswordForm = this.fb.group({
    oldPassword: new FormControl<string>('', [Validators.required]),
    newPassword: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8),
      passwordStrengthValidator,
    ]),
    confirmpassword: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8),
      mustMatchPassword('newPassword', 'confirmpassword'),
    ]),
  });

  changePassword() {
    const originalPassword = this.changePasswordForm.get('oldPassword')?.value!;
    const newPassword = this.changePasswordForm.get('newPassword')?.value!;
    this.authService.changePasswordForUser(newPassword, originalPassword)
    this.changePasswordForm.reset();
  }

}
