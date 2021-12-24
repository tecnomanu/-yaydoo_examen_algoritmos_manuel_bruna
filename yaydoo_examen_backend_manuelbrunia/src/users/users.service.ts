import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pagination } from 'src/pagination/pagination';
import { PaginationOptionsInterface } from '../pagination/pagination.options';
import { CreateUserDto } from './dto/user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) { }

  async findAll(options: PaginationOptionsInterface): Promise<Pagination<User>> {
    const take = options.limit || 10
    const page = options.page || 0

    const skip = Number(page > 1 ? take * (page-1): 0);

    const results = await this.userModel
                              .find({})
                              .sort({ _id: 1 })
                              .skip(skip)
                              .limit(take)
                              .populate('personalInformation');
                              
    const total = await this.userModel.count();

    return new Pagination<User>({
      results,
      total,
    });  
  }

  async findById(userId: string): Promise<User> {
    const user = await this.userModel.findById(userId);
    await user.populate('personalInformation');
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto)
    return createdUser.save();
  }

  async update(userId: string, createUserDto: CreateUserDto): Promise<User> {
    await this.userModel.findByIdAndUpdate(userId, createUserDto);
    const updatedUser = this.userModel.findById(userId);
    return updatedUser;
  }

  async delete(userId: string): Promise<User> {
    return this.userModel.findByIdAndDelete(userId).exec();
  }
}
