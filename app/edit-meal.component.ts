import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <!-- Modal (button in meal component)-->
    <div *ngIf="childSelectedMeal" class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Edit {{ childSelectedMeal.name }}</h4>
          </div>
          <div class="modal-body">
            <label>What you ate:</label>
            <input class="form-control" [(ngModel)]="childSelectedMeal.name">
            <label>Notes:</label>
            <input class="form-control" [(ngModel)]="childSelectedMeal.details">
            <label>Number of calories:</label>
            <input class="form-control" type="number" [(ngModel)]="childSelectedMeal.calories">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" (click)="editDone()" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal[];
  @Output() editDoneSender = new EventEmitter();

  editDone() {
    this.editDoneSender.emit();
  }
}
