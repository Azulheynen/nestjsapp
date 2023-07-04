import { Module } from '@nestjs/common';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './recipe.entity';
import { Profile } from './profile.entity';
import { Post } from '../post/post.entity';
@Module({
  imports:  [
    TypeOrmModule.forFeature([Recipe]),
    TypeOrmModule.forFeature([Profile]),
    TypeOrmModule.forFeature([Post]),
  ],
  controllers: [RecipeController],
  providers: [RecipeService],
})
export class RecipeModule {}
