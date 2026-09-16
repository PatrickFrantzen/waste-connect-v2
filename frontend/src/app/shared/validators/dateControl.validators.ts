import { group } from "@angular/animations";
import { FormGroup, ValidationErrors } from "@angular/forms";

export function dateRangeValidator(group: FormGroup): ValidationErrors | null {
    const dateStart = group.get('dateStart')!.value;
    const dateEnd = group.get('dateEnd')!.value;
  
    return dateStart && dateEnd && dateStart > dateEnd ? { 'dateRange': true } : null;
  }