import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateinamen',
    standalone: true
})
export class DateinamenPipe implements PipeTransform {
  transform(text: string): string {
    if (!text) {
      return '';    
    }
    const modifiedText = text.substring(0, text.indexOf("-+-"));
    return modifiedText;
  }
}