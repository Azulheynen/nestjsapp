import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from '../users/users.service';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/crate-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>,
    private usersService: UsersService,
  ) {}

  async createPost(post: CreatePostDto) {
    const userFound = await this.usersService.getUser(post.authorId);

    if (!userFound) {
      return new HttpException('user not found', HttpStatus.NOT_FOUND);
    }
    const newPost = this.postsRepository.create(post);
    return this.postsRepository.save(newPost);
  }
  getPost() {
    return this.postsRepository.find({
      relations: ['author']
    });
  }
}
