import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration'
})
export class FormatDurationPipe implements PipeTransform {

  transform(value: string): string {
    const millis = parseInt(value);
    const minutes = Math.floor(millis / 60000);
    const seconds = parseInt( ((millis % 60000) / 1000).toFixed(0) );

    return `${ minutes }:${ seconds < 10 ? '0' : ''}${ seconds }`;

  }

}
