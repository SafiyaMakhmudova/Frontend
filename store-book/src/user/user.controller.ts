import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './models/user.model';
import { LoginAdmindto } from './dto/loginUser.dto';
import { Response } from 'express';
import { CookieGetter } from '../decorators/cookieGetter.decorator';
import { AdminGuard } from '../guards/admin.guard';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({summary: 'Creating Admin'})
  @ApiResponse({status: 200, description: 'Dates of Admin', type: User})
  @Post('signup')
  // @UseGuards(AdminGuard)
  registration(
    @Body() createAdminDto: CreateUserDto,
    @Res({ passthrough: true}) res: Response
    ) {
    return this.userService.registration(createAdminDto, res);
  }


  @ApiOperation({summary: 'Logging in admin'})
  @ApiResponse({status: 200, description: 'Loged in admin', type: String})
  @Post('signin')
  login(
    @Body() loginAdmindto: LoginAdmindto,
    @Res({ passthrough: true}) res: Response,
  ) {
    return this.userService.login(loginAdmindto, res);
  }


  @ApiOperation({summary: 'Logging out admin'})
  @ApiResponse({status: 200, description: 'Logged out', type: String})
  @Post('signout')
  logout(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true}) res: Response,
  ) {
    return this.userService.logout(refreshToken, res);
  }


  @ApiOperation({summary: 'Refreshing the token of admin'})
  @ApiResponse({status: 200, description: 'New token', type: String})
  @Post('/:id/refresh')
  refresh(
    @Param('id') id: string,
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true}) res: Response,
  ) {
    return this.userService.refreshToken(+id, refreshToken, res);
  }


  @ApiOperation({summary: 'Finding admin by search'})
  @ApiResponse({status: 200, description: '[Role]', type: [User]})
  @Post('find')
  @UseGuards(AdminGuard)
  findAll() {
    return this.userService.findAll();
  }


  @ApiOperation({summary: 'Finding admin by id'})
  @ApiResponse({status: 200, description: 'Admin', type: User})
  @Get(':id')
  @UseGuards(AdminGuard)
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }


  @ApiOperation({summary: 'Updating admin '})
  @ApiResponse({status: 200, description: 'updated admin', type: User})
  @Patch(':id')
  @UseGuards(AdminGuard)
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateUserDto) {
    return this.userService.update(+id, updateAdminDto);
  }


  @ApiOperation({summary: 'Delating admin'})
  @ApiResponse({status: 200, description: 'Admin delated', type: String})
  @Delete(':id')
  @UseGuards(AdminGuard)
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
