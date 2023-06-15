import { Document } from "mongoose"; 

export interface Recipe extends Document {
  name: string;
  ingredients: string;
  imageURL: string;
  category: string;
  createdAt: Date;
}
