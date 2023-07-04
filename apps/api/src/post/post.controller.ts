import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/crate-post.dto';
import { PostService } from './post.service';
import { Post as Posts } from './post.entity';

@Controller('posts')
export class PostController {
  constructor(private postsService: PostService) {}

  @Post()
  createPost(@Body() post: CreatePostDto) {
    return this.postsService.createPost(post);
  }

  @Get()
  getPost() {
    return this.postsService.getPost();
  }
}
