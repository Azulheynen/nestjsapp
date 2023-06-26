import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Recipe, RecipeWithoutID } from '../interfaces/recipe';

import { ObjectId } from "mongodb";




@Injectable({
  providedIn: 'root'
})


export class RecipeService {

  BASE_URL = "http://localhost:3000/api"

  constructor(private http: HttpClient) { }

 

  getRecipes(): Observable<Recipe[]>{
   return this.http.get<Recipe[]>(`${this.BASE_URL}/recipe`)
  }

  getRecipe(id: string): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(`${this.BASE_URL}/recipe/${id}`)
   }


  createRecipe(recipe: RecipeWithoutID): Observable<Recipe>{
    return this.http.post<Recipe>(`${this.BASE_URL}/recipe/create`, recipe)
 
   }
  deleteRecipe(id: string): Observable<Recipe>{
    return this.http.delete<Recipe>(`${this.BASE_URL}/recipe/delete?recipeID=${id}`)
   }

  updateRecipe(id: string,recipe: RecipeWithoutID): Observable<Recipe>{
    return this.http.put<Recipe>(`${this.BASE_URL}/recipe/update?recipeID=${id}`, recipe)
   }
}
