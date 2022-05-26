import { Module } from '@nestjs/common';
import { UsersService } from './service/users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userschema } from './schema/user.schema';
import { UsersController } from './controller/users.controller';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'user', schema: userschema }])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule {}
