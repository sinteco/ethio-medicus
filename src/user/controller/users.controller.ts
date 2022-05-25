import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
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
  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const user = await this.userService.readById(id);
    return response.status(HttpStatus.OK).json({
      user,
    });
  }
  @Put('/:id')
  async update(@Res() response, @Param('id') id, @Body() product: User) {
    const updateduser = await this.userService.update(id, product);
    return response.status(HttpStatus.OK).json({
      updateduser,
    });
  }

  @Delete('/:id')
  async delete(@Res() response, @Param('id') id) {
    const deleteduser = await this.userService.delete(id);
    return response.status(HttpStatus.OK).json({
      deleteduser,
    });
  }
}
