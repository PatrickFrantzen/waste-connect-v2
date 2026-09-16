
import { AbstractControl, FormGroup } from '@angular/forms';

export const mustMatchPassword = (controlName: string, matchingControlName: string) => {
  return (group: AbstractControl) => {
    const control = group.get(controlName);
    const matchingControl = group.get(matchingControlName);

    if (control?.value !== matchingControl?.value) {
      matchingControl?.setErrors({ mustMatchPassword: true });
    } else {
      matchingControl?.setErrors(null);
    }

    return null;
  };
}
