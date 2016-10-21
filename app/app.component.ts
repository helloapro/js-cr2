import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-tracker',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1 class="text-center">Meal Tracker - Meal Hacker</h1>
      <p class="jumbotext">"Ultimately, the most efficient way to live is like a snake - eat sparingly, do very little, & strike when the time is right..." ~ Confucius</p>
    </div>
    <div class="row">
      <div class="col-sm-3 well">
        <meal-list
          [childMealList] = "allMeals"
        ></meal-list>
      </div>
      <div class="col-sm-6">
        <add-meal
          (addMealSender) = "addMeal($event)"
        ></add-meal>
      </div>
      <div class="col-sm-3 well"></div>
    </div>
  </div>
  `
})

export class AppComponent {
  public allMeals: Meal[] = [
    new Meal("Killer Burger", "Asked for extra peanut butter, gave me extra tummy ache - no bun", 500),
    new Meal("Yogurt", "Soupier than usual", 100),
    new Meal("Glutenfree Spaghetti", "That Quinoa stuff is this shit!", 350),
    new Meal("Sizzle Pie", "Cannot get enough of The Ol Dirty", 600),
    new Meal("KURE", "Only skinny and young people work here to shame me", 200),
  ];

  addMeal(addedMeal: Meal) {
    this.allMeals.push(addedMeal);
  }

}
