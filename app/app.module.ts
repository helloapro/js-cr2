import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
import { MealComponent } from './meal.component';
import { AddMealComponent } from './add-meal.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    MealListComponent,
    MealComponent,
    AddMealComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
