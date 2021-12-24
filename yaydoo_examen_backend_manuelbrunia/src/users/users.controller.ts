import { Body, Controller, Delete, Get, Header, Param, Post, Put, Request } from '@nestjs/common';
import { Pagination } from 'src/pagination/pagination';
import { CreateUserDto } from './dto/user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    async findAll(@Request() request): Promise<Pagination<User>>  {
      return this.usersService.findAll({
        limit: request.query.hasOwnProperty('limit') ? request.query.limit : 10,
        page: request.query.hasOwnProperty('page') ? request.query.page : 1,
      });
    }
    
    @Get("/:userId")
    async findById(@Param('userId') userId): Promise<User>{
      return this.usersService.findById(userId);
    }

    @Post()
    async create(@Body() createUserDto:CreateUserDto) {
      return this.usersService.create(createUserDto);
    }

    @Put("/:userId")
    async update(@Param('userId') userId, @Body() createUserDto:CreateUserDto) {
      return this.usersService.update(userId, createUserDto);
    }

    @Delete("/:userId")
    async delete(@Param('userId') userId): Promise<User> {
      return this.usersService.delete(userId);
    }
}
