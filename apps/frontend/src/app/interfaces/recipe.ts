
import  mongoose from 'mongoose'
const Schema = mongoose.Schema;


export interface Recipe {
    name: string;
    ingredients: string;
    imageURL: string;
    category: string;
    _id: string
  }

  export interface RecipeWithoutID {
    name: string;
    ingredients: string;
    imageURL: string;
    category: string;
  }
  