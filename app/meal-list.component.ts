import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';

@Component({
  selector: 'meal-list',
  template: `
    <div *ngFor="let meal of childMealList">
      <meal-display
        [meal] = "meal"
        [childSelectedMeal] = "childSelectedMeal"
        (clickEditMealSender) = "editMeal($event)"
        (editDoneSender) = "editDone()"
      ></meal-display>
      <br>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Input() childSelectedMeal: Meal[];
  @Output() clickEditMealSender = new EventEmitter();
  @Output() editDoneSender = new EventEmitter();

  editMeal(mealToEdit: Meal) {
    this.clickEditMealSender.emit(mealToEdit)
  }

  editDone() {
    this.editDoneSender.emit();
  }
}
