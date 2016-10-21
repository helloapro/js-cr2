import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { FilterPipe } from './filter.pipe';
import { MealFilterDisplayComponent } from './meal-filter.component';

@Component({
  selector: 'meal-list',
  template: `
    <div *ngFor="let meal of childMealList | filter:childSelectedCalories">
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
  @Input() childSelectedCalories: string;
  @Output() clickEditMealSender = new EventEmitter();
  @Output() editDoneSender = new EventEmitter();

  editMeal(mealToEdit: Meal) {
    this.clickEditMealSender.emit(mealToEdit)
  }

  editDone() {
    this.editDoneSender.emit();
  }
}
