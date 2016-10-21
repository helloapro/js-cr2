import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'add-meal',
  template: `
    <div>
      <h1 class="fruit-header">Log a meal</h1>
      <label class="fruit-text">What did you eat?</label>
      <input class="form-control" #mealName>
      <label class="fruit-text">Notes:</label>
      <textarea class="form-control" #mealDetails></textarea>
      <label class="fruit-text">Number of calories:</label>
      <input class="form-control" type="number" #mealCalories>
      <hr>
      <button class="btn btn-warning fruit-text pull-right" (click)="addClicked(mealName.value, mealDetails.value, mealCalories.value);
      mealName.value = '';
      mealDetails.value = '';
      mealCalories.value = '';
      ">Add</button>
    </div>
  `
})

export class AddMealComponent {
  @Output() addMealSender = new EventEmitter();

  addClicked(name: string, details: string, calories: number) {
    var addedMeal: Meal = new Meal(name, details, calories);
    this.addMealSender.emit(addedMeal);
  }
}
