import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../../interfaces/recipe'
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = []
  
  constructor(private recipeService: RecipeService, private http: HttpClient){
  }



  private apiUrl = 'http://localhost:3000/api';



   ngOnInit() {
       this.getRecipes();
   } 

  getRecipes(): Observable<Recipe[]>{
    this.recipeService.getRecipes()
    .subscribe({
      error: (e) => console.error(e),
      complete: () => console.info('complete'), 
      next: (res) => {
        this.recipes = res
      }
  })
  return        this.http.get<Recipe[]>(this.apiUrl + '/recipes');

}



deleteRecipe(
  _id: string): void {

  this.recipeService.deleteRecipe(_id)
    .subscribe({
      error: (e) => console.error(e),
      next: (res) => {
        
        console.log(res);
        this.getRecipes();
      }
      })
}

}
