import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../../interfaces/recipe'


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = []

  recipesvalue= this.recipes.values()



  constructor(private recipeService: RecipeService){
  }
   ngOnInit() {
       this.getRecipes();
   }

  getRecipes(){
    this.recipeService.getRecipes()
    .subscribe({
      error: (e) => console.error(e),
      complete: () => console.info('complete'), 
      next: (res) => {
        this.recipes = res
      }
  })
}

deleteRecipe(id: string): void {

  this.recipeService.deleteRecipe(id)
    .subscribe({
      error: (e) => console.error(e),
      next: (res) => {
        
        console.log(res);
        this.getRecipes();
      }
      })
}

}
