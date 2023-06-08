import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  Put,
  Delete,
  Res,
} from '@nestjs/common';

import { CreateRecipeDTO } from './dto/recipe.dto';

@Controller('recipe')
export class RecipeController {
  @Post('/create')
  createPost(@Res() res, @Body() createRecipeDTO: CreateRecipeDTO) {
    console.log(createRecipeDTO);
    return res.status(HttpStatus.OK).json({
      message: 'recived',
    });
  }
}
