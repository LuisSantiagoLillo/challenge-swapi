import { Pipe, PipeTransform } from '@angular/core';
import { Starship } from '../models/Starship';

@Pipe({
  name: 'countStops'
})
export class CountStopsPipe implements PipeTransform {

  transform(count: number): string {
    if (count > 0) {
      return `Total Stops needed: ${count}`;
    } else {
      return 'No needs any Stop';
    }
  }

}