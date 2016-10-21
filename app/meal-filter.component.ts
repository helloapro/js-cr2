import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';

@Component({
  selector: 'meal-filter',
  template: `
    <select class="form-control selector" (change)="caloriesChange($event.target.value)">
      <option *ngFor="let type of childTypeList" [value]="type">{{type}}</option>
    </select>
  `
})

export class MealFilterDisplayComponent {
  @Input() childTypeList: string[];
  @Output() caloriesTypeSender = new EventEmitter();

  caloriesChange(caloriesFromMenu: string) {
    var caloriesType: string = caloriesFromMenu;
    this.caloriesTypeSender.emit(caloriesType);
  }
}
