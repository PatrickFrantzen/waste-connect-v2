import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceBefoerdern',
  standalone: true,
})
export class ReplaceBefoerdernPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('befoerdern', 'befördern');
  }

}