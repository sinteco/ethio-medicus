import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { UsersService } from '../service/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/')
  create(@Body() user: UserDto): Promise<UserDto> {
    return this.userService.create(user);
  }
  @Get('/')
  findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }
}
