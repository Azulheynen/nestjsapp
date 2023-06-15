import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit{

  recipe: Recipe = {
    name:'',
    ingredients: '',
    imageURL: '',
    category: '',
    id: ''
    }


  edit: boolean = false;
  
  constructor( private recipeService : RecipeService,
   private  router : Router,
   private activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
      this.submitRecipe()
  }
    

  submitRecipe(){
    this.recipeService.createRecipe(this.recipe)
    .subscribe({
      error: (e) => console.error(e, "el error es aca"),
      complete: () => console.info('complete'), 
      next: (res) => {console.log(res),
      this.router.navigate(['/'])
      }
  })
  }
}
