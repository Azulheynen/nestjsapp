import { Schema } from 'mongoose';
const mongoose = require('mongoose');

export const RecipeSchema = new mongoose.Schema({  name: String,
  ingredients: String,
  imageURL: String,
  createdAt: { type: Date, default: Date.now },
  _id: {type:Schema.Types.ObjectId}, 
  recipeID: {type:Schema.Types.ObjectId}, 
}, {
  strictQuery: true
});