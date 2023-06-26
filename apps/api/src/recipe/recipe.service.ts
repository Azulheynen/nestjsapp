import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Recipe } from './interfaces/recipe.interface';
import { CreateRecipeDTO } from './dto/recipe.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class RecipeService {
  constructor(@InjectModel('Recipe') readonly recipeModel: Model<Recipe>) {}

  async getRecipes(): Promise<Recipe[]> {
    const recipes = await this.recipeModel.find();
    return recipes;
  }
  async getRecipe(recipeID?: string): Promise<Recipe> {
    const recipe = await this.recipeModel.findById(recipeID);
    return recipe;
  }
  async createRecipe(createRecipeDTO: CreateRecipeDTO): Promise<Recipe> {
    const recipe = new this.recipeModel(createRecipeDTO);
    recipe._id = new ObjectId()
    return await recipe.save(recipe._id);
  }
  async deleteRecipe(recipeID?: string): Promise<Recipe> {
    const deletedRecipe = await this.recipeModel.findByIdAndDelete(recipeID);
    return deletedRecipe;
  }
  async updateRecipe(
    recipeID: string,
    createRecipeDTO: CreateRecipeDTO,
  ): Promise<Recipe> {
    const updatedRecipe = await this.recipeModel.findByIdAndUpdate(
      recipeID,
      createRecipeDTO,
      { new: true },
    );
    return updatedRecipe;
  }
}
