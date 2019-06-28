import { Pipe, PipeTransform } from '@angular/core';
import { Starship } from '../models/Starship';

@Pipe({
  name: 'countStops'
})
export class CountStopsPipe implements PipeTransform {

  transform(starship: Starship): number {
  let stops = 0;
    let consumableSplit = starship.consumables.split(' ');
    if (consumableSplit.length == 2) {
      let consumableDays = getDays(parseInt(consumableSplit[0]), consumableSplit[1]);
      let hours = 1000000/parseInt(starship.MGLT);
      console.log(hours);
      let days = hours / 24;
      stops = days / consumableDays;
      
    }
    return Math.round(stops);
  }

}


function getDays(numberDays: number, stringTime: string) {
  console.log(numberDays, stringTime);
  let days = -1;
  let values = [['years', 365], ['month', 30], ['week', 7], ['day', 1], ['year', 365], ['months', 30], ['weeks', 7], ['days', 1]];
  values.forEach(e => {
    if (e[0] == stringTime) {
      days = e[1] * numberDays;
    }
  });
  return days;
}


/*
                                if (starship.MGLT != 'unknown')
                                    MGLT = starship.MGLT;
                                var consumablesSplit = consumables.split(" ");
                                if (consumablesSplit.length == 2 && MGLT != 0) {
                                    var number = parseInt(consumablesSplit[0]);
                                    var strTime = consumablesSplit[1];
                                    var consumablesDays = getDays(number, strTime);
                                    var hours = parseInt(txtMGLT) / MGLT;
                                    var days = hours / 24;
                                    stops = parseInt(days / consumablesDays);
                                }
                                textResult += '<p><label><bold>' + name + '</bold></label> -> ' + stops + ' </p>'

*/