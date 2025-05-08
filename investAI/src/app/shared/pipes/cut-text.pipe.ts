import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText',
  standalone: true
})
export class CutTextPipe implements PipeTransform {

  transform(value: string, showAll: boolean): string {
    if (value && !showAll && value.length > 20) {
      return value.substring(0, 20) + '...';
    }
    return value;
  }

}
