import { AbstractControl, FormControl, FormGroupDirective, NgForm, ValidatorFn } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(
      control: FormControl | null,
      form: FormGroupDirective | NgForm | null 
    ): boolean {
      const isSubmitted = form && form.submitted;
      return !!(
        control &&
        control.invalid &&
        (control.dirty || control.touched || isSubmitted)
      );
    }
  }

  export function bundeslandValidator(bundeslandEvent: any): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      return bundeslandEvent === undefined ? { 'bundeslandError': {value: control.value} } : null;
    };
  }