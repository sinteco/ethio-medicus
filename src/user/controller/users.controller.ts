import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { User } from '../schema/user.schema';
import { UsersService } from '../service/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/')
  async create(@Res() response, @Body() user: User): Promise<User> {
    const newUser = await this.userService.create(user);
    return response.status(HttpStatus.CREATED).json({
      newUser,
    });
  }
  @Get('/')
  async findAll(@Res() response): Promise<User[]> {
    const users = await this.userService.findAll();
    return response.status(HttpStatus.OK).json({
      users,
    });
  }
}
