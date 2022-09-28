import { Injectable } from '@angular/core';
import {Recipe} from "./recipes.model";
import {Ingredient} from "../shared/ingredients.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";


@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  private recipes: Recipe[] = [
    new Recipe(
      'test 1',
      'this is test one',
      [
        new Ingredient('Beans', 2),
        new Ingredient('Beans', 2),
      ],
      'https://media.self.com/photos/61e9dae8808d098c8ccc3b58/1:1/w_768,c_limit/15-Bean-Soup-Vegetarian.jpg'),
    new Recipe(
      'test 2',
      'this is test two',
      [new Ingredient('Beans', 2)],
      'https://static.toiimg.com/photo/83511111.cms')
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  gerRecipes() {
    return this.recipes.slice()
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addRecipeIngredients(ingredients)
  }
}
