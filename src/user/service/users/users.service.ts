import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/schema/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('user')
    private userModel: Model<User>,
  ) {}

  create(user: User): Promise<User> {
    return this.userModel.create(user);
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
