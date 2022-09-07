import {Injectable, EventEmitter, Output} from '@angular/core';
import {Ingredient} from "../shared/ingredients.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  @Output() ingredientsChanged = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 2),
    new Ingredient('Tomatoes', 3),
  ]

  getIngredients() {
    return this.ingredients.slice()
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addRecipeIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }


}
