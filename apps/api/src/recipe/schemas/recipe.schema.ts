import { Schema } from 'mongoose';

export const RecipeSchema = new Schema({
  name: String,
  ingredients: String,
  imageURL: String,
  createdAt: { type: Date, default: Date.now },
});
