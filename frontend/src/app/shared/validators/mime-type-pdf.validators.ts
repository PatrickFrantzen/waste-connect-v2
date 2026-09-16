import { AbstractControl } from '@angular/forms';
import { Observable, Observer, forkJoin, map, of } from 'rxjs';

export const mimeTypePDForImage = (
  control: AbstractControl<File[]>
):
| Promise<{ [key: string]: any | null} | null> 
| Observable<{ [key: string]: any | null } | null> => {

  const files: File[] = control.value as File[];

  if (!files || typeof(control.value) === 'string') {
    return of(null)
  }

  const fileReaderObservables = files.map(file => {
    if(!(file instanceof File)){
      return Promise.resolve({ invalidMimeType: true });
    }

    return new Observable(
      (observer: Observer<{ [key: string]: any } | null>) => {
        const fileReader = new FileReader();
        fileReader.addEventListener('loadend', () => {
          const arr = new Uint8Array(fileReader.result as ArrayBuffer).subarray(
            0,
            4
          );
          let header = '';
          let isValid = false;
          for (let i = 0; i < arr.length; i++) {
            header += arr[i].toString(16);
          }
          switch (header) {
            case '25504446':
            case '89504e47':
            case 'ffd8ffe0':
            case 'ffd8ffe1':
            case 'ffd8ffe2':
            case 'ffd8ffe3':
            case 'ffd8ffe8':
              isValid = true;
              break;
            default:
              isValid = false; // Or you can use the blob.type as fallback
              break;
          }
          if (isValid) {
            observer.next(null);
          } else {
            observer.next({ invalidMimeType: true });
          }
          observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
      }
    );
  });

  return forkJoin(fileReaderObservables).pipe(
    map(results => results.find(result => result !== null) || null)
  );
};
