import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
import { MealComponent } from './meal.component';
import { AddMealComponent } from './add-meal.component';
import { EditMealComponent } from './edit-meal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    MealListComponent,
    MealComponent,
    AddMealComponent,
    EditMealComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
