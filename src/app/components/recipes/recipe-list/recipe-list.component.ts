import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Pancakes', 'Flour, milk, eggs', 'https://www.theworktop.com/wp-content/uploads/2019/02/Thin-Pancakes-Recipe-1x1.jpg'),
    new Recipe('Burek', 'Kore, meso, luk', 'https://i2.wp.com/kuhinjazaposlenezene.com/wp-content/uploads/2019/07/Burek-blog-2.jpg?fit=1200%2C800&ssl=1')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
