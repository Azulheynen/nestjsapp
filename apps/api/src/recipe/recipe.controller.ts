import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  Put,
  Delete,
  Res,
  Param,
  NotFoundException,
  Query,
} from '@nestjs/common';

import { CreateRecipeDTO } from './dto/recipe.dto';

import { RecipeService } from './recipe.service';

@Controller('recipe')
export class RecipeController {
  constructor(private recipeService: RecipeService) {}

  @Post('/create')
  async createPost(@Res() res, @Body() createRecipeDTO: CreateRecipeDTO) {
    const recipe = await this.recipeService.createRecipe(createRecipeDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Recipe Created Succesfully',
      recipe: recipe,

    });
  }

  @Get('/')
  async getRecipes(@Res() res) {
    const recipes = await this.recipeService.getRecipes();
    return res.status(HttpStatus.OK).json({
      recipes,
    });
  }

  @Get('/:recipeID')
  async getRecipe(@Res() res, @Param('recipeID') recipeID) {
    const recipe = await this.recipeService.getRecipe(recipeID);
    if (!recipe) throw new NotFoundException('Recipe does not exist');
    return res.status(HttpStatus.OK).json(recipe);
  }

  @Delete('/delete')
  async deleteRecipe(@Res() res, @Query('recipeID') recipeID) {
    const recipeDeleted = await this.recipeService.deleteRecipe(recipeID);
    if (!recipeDeleted) throw new NotFoundException('Recipe does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Recipe Deleted Succesfully',
      recipeDeleted,
    });
  }

  @Put('/update')
  async updateRecipe(
    @Res() res,
    @Body() CreateRecipeDTO: CreateRecipeDTO,
    @Query('recipeID') recipeID,
  ) {
    const updatedRecipe = await this.recipeService.updateRecipe(
      recipeID,
      CreateRecipeDTO,
    );
    if (!updatedRecipe)
      throw new NotFoundException(
        'Recipe cant be updated because it does not exist',
      );
    return res.status(HttpStatus.OK).json({
      message: 'Recipe Updated Succesfully',
      updatedRecipe,
    });
  }
}
