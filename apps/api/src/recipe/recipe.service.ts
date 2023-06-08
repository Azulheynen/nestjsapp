import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Recipe } from './interfaces/recipe.interface';
import { CreateRecipeDTO } from './dto/recipe.dto';

@Injectable()
export class RecipeService {

    constructor(@InjectModel('Recipe'))
}
