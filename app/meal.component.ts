import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
import { EditMealComponent } from './edit-meal.component';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div class="row well entry-text">
      <h4>
        {{ meal.name }}
        <button type="button" (click)="editMeal(meal)" class="btn btn-xs pull-right" data-toggle="modal" data-target="#myModal">
          <img class="edit" src="../../resources/img/edit.png">
        </button>
        <edit-meal
        [childSelectedMeal] = "childSelectedMeal"
        (editDoneSender) = "editDone()"
        ></edit-meal>
      </h4>
      <h5>- {{ meal.calories }} calories</h5>
      <p>Some deets: {{ meal.details }}</p>
    </div>
  `
})

export class MealComponent {
  public meal: Meal;
  @Output() clickEditMealSender = new EventEmitter();
  @Input() childSelectedMeal: Meal[];
  @Output() editDoneSender = new EventEmitter();

  editMeal(mealToEdit: Meal) {
    this.clickEditMealSender.emit(mealToEdit)
  }

  editDone() {
    this.editDoneSender.emit();
  }
}
