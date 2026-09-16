import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncateText',
    standalone: true
})
export class TruncateTextPipe implements PipeTransform {
  transform(text: string, maxWidth: number): string {
    if (!text) {
      return '';
    }

    const truncatedText = text.substring(0, maxWidth);

    return truncatedText + '...';
  }
}
