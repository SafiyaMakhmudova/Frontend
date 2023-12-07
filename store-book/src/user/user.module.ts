import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { User } from './models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([User]),
  JwtModule.register({}),],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
