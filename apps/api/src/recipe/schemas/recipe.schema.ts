import { Schema } from 'mongoose';

export const RecipeSchema = new Schema({
  name: String,
  description: String,
  imageURL: String,
  createdAt: { type: Date, default: Date.now },
});
