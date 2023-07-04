
import { keys } from 'ts-transformer-keys';


export interface Recipe {
    name: string;
    ingredients: string;
    imageURL: string;
    category: string;
    _id: string;
  }


  export interface RecipeWithoutID {
    name: string;
    ingredients: string;
    imageURL: string;
    category: string;
  }
  