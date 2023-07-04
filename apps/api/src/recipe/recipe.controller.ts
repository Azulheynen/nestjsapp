import { CreateRecipeDTO } from './dto/create-recipe.dto';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.entity';
import {UpdateRecipeDto} from './dto/update-recipe.dto'



@Controller('recipe')
export class RecipeController {
  constructor(private recipeService: RecipeService) {}

 
  @Get('/')
  async getRecipes() {
    const recipes = await this.recipeService.getRecipes();
    return  recipes
  }

  @Get('/:id')
  async getRecipe(@Param('id', ParseIntPipe) id: number) {
    const recipe = await this.recipeService.getRecipe(id);
    if (!recipe) throw new HttpException('Recipe does not exist', HttpStatus.CONFLICT);
   return this.recipeService.getRecipe(id);
  }

  @Delete('/delete')
  deleteUsers(@Param('id', ParseIntPipe) id: number) {
  const recipeDeleted = this.recipeService.deleteRecipe(id);
  if (!recipeDeleted) throw new HttpException('Recipe does not exist', HttpStatus.CONFLICT);
  return `recipe with id : #${id} delete succesfully `;
  }

  @Post('/create')
  createRecipe(@Body() newRecipe: CreateRecipeDTO) {
    return this.recipeService.createRecipe(newRecipe);
  }
  

  @Patch('/update')
  updateRecipe(@Param('id', ParseIntPipe) id: number, @Body() recipe: UpdateRecipeDto) {
    return this.recipeService.updateRecipe(id, recipe);
  }

  @Post(':id/profile')
  createProfile(
    @Param('id', ParseIntPipe)
    id: number,
    @Body() profile //falta createprofiledto
  ) {
    return this.recipeService.createProfile(id, profile);
  }
  
}
