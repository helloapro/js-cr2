import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div class="row">
      <h4>{{ meal.name }}</h4><h5>- {{ meal.calories }} calories</h5>
      <p>Some deets: {{ meal.details }}</p>
    </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
