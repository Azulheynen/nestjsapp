import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent implements OnInit {
  recipe: Recipe = {
    name: '',
    ingredients: '',
    imageURL: '',
    category: '',
    _id: '',
  };

  edit: boolean = false;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.submitRecipe();
  }

  submitRecipe() {
    console.log('submitting!!!')
    console.log({ recipe: this.recipe })
    const { _id, ...recipeWithoutIdProperty } = this.recipe
    this.recipeService.createRecipe(recipeWithoutIdProperty).subscribe({
      error: (e) => {
        return console.error(e, 'el error es aca')
      },
      complete: () => {
        console.info('complete')
      },
      next: (res) => {
        console.log({ completeRes: res })
        console.log(res), this.router.navigate(['/']);
      },
    });
  }
}
