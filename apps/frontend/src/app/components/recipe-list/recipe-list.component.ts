import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

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
      next: (res) => console.log(res)
  })
}
}
