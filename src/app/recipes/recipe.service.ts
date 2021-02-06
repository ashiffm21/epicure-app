import { Subject } from 'rxjs';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();
  private   recipes: Recipe[]=[
        new Recipe(
        'Chicken Burger Classic',
        'Awesome Burger!!',
        'https://cdn.pixabay.com/photo/2017/11/16/05/51/chicken-burger-2953388_1280.jpg',
        [
          new Ingredient('Chicken ', 1),
          new Ingredient('Burger Bun', 1)

        ]),
        new Recipe(
        'Ultimate Veggie Sandwich',
        'Tasty and healthy Sandwich!!',
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1556744250%2Fthe-ultimate-veggie-sandwich-1905.jpg%3Fitok%3D1ip9ZNIm',
        [
          new Ingredient('Bread',2),
          new Ingredient('Vegges',1)
        ])
      ];

 constructor(private slService: ShoppingListService){
 }

 getRecipes(){
     return this.recipes.slice();
 }

getRecipe(index: number){
  return this.recipes[index];
}

 addIngredientsToShoppingList(ingredients: Ingredient[]){
   this .slService.addIngredients(ingredients) ; 
 }

 addRecipe(recipe : Recipe){
  this.recipes.push(recipe);
  this.recipesChanged.next(this.recipes.slice());
 }

 updateRecipe(index : number,newRecipe: Recipe){
  this.recipes[index] = newRecipe; 
  this.recipesChanged.next(this.recipes.slice());
 }

 deleteRecipe(index : number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
 }


}