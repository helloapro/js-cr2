import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'add-meal',
  template: `
    <h3>Log a meal</h3>
      <label>What did you eat?</label>
      <input class="form-control" #mealName>
      <label>Notes:</label>
      <input class="form-control" #mealDetails>
      <label>Number of calories:</label>
      <input class="form-control" type="number" #mealCalories>
      <hr>
      <button (click)="addClicked(mealName.value, mealDetails.value, mealCalories.value);
      mealName.value = '';
      mealDetails.value = '';
      mealCalories.value = '';
      ">Add</button>
  `
})

export class AddMealComponent {
  @Output() addMealSender = new EventEmitter();

  addClicked(name: string, details: string, calories: number) {
    var addedMeal: Meal = new Meal(name, details, calories);
    this.addMealSender.emit(addedMeal);
  }
}
