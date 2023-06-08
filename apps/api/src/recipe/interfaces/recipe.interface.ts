import { Document } from "mongoose"; 

export interface Recipe extends Document {
  name: string;
  description: string;
  imageURL: string;
  category: string;
  createdAt: Date;
}
