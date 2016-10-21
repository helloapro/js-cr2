import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "filter",
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(input: Meal[], desiredCalories) {
    var output: Meal[] = [];
    if(desiredCalories === "All meals") {
      return input;
    } else if(desiredCalories === "Less than 500 calories") {
      for(var i=0; i<input.length; i++) {
        if(input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredCalories === "500 calories or more") {
      for(var i=0; i<input.length; i++) {
        if(input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
