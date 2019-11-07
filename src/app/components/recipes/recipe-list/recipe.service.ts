import { Recipe } from '../recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Pancakes', 'Flour, milk, eggs',
    'https://www.theworktop.com/wp-content/uploads/2019/02/Thin-Pancakes-Recipe-1x1.jpg'),
    new Recipe('Burek', 'Kore, meso, luk',
    'https://i2.wp.com/kuhinjazaposlenezene.com/wp-content/uploads/2019/07/Burek-blog-2.jpg?fit=1200%2C800&ssl=1')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
