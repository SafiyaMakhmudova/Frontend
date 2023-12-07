import { BadRequestException, ForbiddenException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { LoginAdmindto } from './dto/loginUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userRepo: typeof User,
    private readonly jwtService: JwtService,
  ){}

    async getTokens(user: User) {
      const jwtPayload = {
        id: user.id,
        password: user.hashed_password,
        role: user.role,
      };

      const [accessToken, refreshToken] = await Promise.all([
        this.jwtService.signAsync(jwtPayload, {
          secret: process.env.ACCESS_TOKEN_KEY,
          expiresIn: process.env.ACCESS_TOKEN_TIME
        }),

        this.jwtService.signAsync(jwtPayload, {
          secret: process.env.REFRESH_TOKEN_KEY,
          expiresIn: process.env.REFRESH_TOKEN_TIME
        }),

      ]);
      return {
        access_token: accessToken,
        refresh_token: refreshToken,
      };
    }

    async registration(createUserDto: CreateUserDto, res: Response) {
      const user = await this.userRepo.findOne({
        where: {phone_number: createUserDto.phone_number},
      });
      if(user) {
        throw new BadRequestException('User already exits!')
      }

      const hashed_password = await bcrypt.hash(createUserDto.password, 7);
      const newUser = await this.userRepo.create({
        ...createUserDto,
        hashed_password: hashed_password,
      });

      const tokens = await this.getTokens(newUser);
      const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

      const updateUser = await this.userRepo.update(
        {
          hashed_refresh_token: hashed_refresh_token,
        },
        { where: { id: newUser.id}, returning: true}
      );
      res.cookie('refresh_token', tokens.refresh_token, {
        maxAge: 15 * 24 * 60 * 1000,
        httpOnly: true,
      });

      const response = {
        message: 'User registred',
        user: updateUser[1][0],
        tokens,
      };
      return response;
    }


    async login(loginAdmindto: LoginAdmindto, res: Response) {
      const  {email, password} = loginAdmindto;
      const admin = await this.userRepo.findOne({where: {email}});
  
      if(!admin) {
        throw new UnauthorizedException('Admin not registred')
      }
  
      const isMatchPass = await bcrypt.compare(password, admin.hashed_password);
  
      if(!isMatchPass) {
        throw new UnauthorizedException('Admin not registred(password)')
      }
  
      const tokens = await this.getTokens(admin);
      const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
  
      const updateAdmin = await this.userRepo.update({
        hashed_refresh_token: hashed_refresh_token
      },
      {where: {id: admin.id}, returning: true}
      );

      let user = 'user'
      if(admin.role == 'ADMIN')
      {
        user = 'admin'
      }
  
      res.cookie('refresh_token', tokens.refresh_token, {
        maxAge: 15 * 24 * 60 * 60 * 100,
        httpOnly: true 
      });
  
      const response = {
        message: 'Admin logged in',
        admin: updateAdmin[1][0],
        tokens,
        user
      };
      return response;
    }
  
  async logout(refreshToken: string, res: Response) {
    const AdminData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY_FA,
    });
    if(!AdminData) {
      throw new ForbiddenException('Admin not found');
    }
  
    const updateAdmin = await this.userRepo.update(
      { hashed_refresh_token: null},
      { where: {id: AdminData.id}, returning: true}
    );
  
    res.clearCookie('refresh_token');
    const response = {
      message: 'Admin logged out seccessfully',
      admin: updateAdmin[1][0],
    };
    return response;
  }
  
  
    async refreshToken(admin_id: number, refreshToken: string, res: Response) {
      const decodedToken = this.jwtService.decode(refreshToken);
      if(admin_id != decodedToken['id']) {
        throw new BadRequestException('Admin not found')
      }
      
      const admin = await this.userRepo.findOne({ where: {id: admin_id}});
      if (!admin || !admin.hashed_refresh_token) {
        throw new BadRequestException('Admin not found')
      }
      const tokenMatch = await bcrypt.compare(
        refreshToken,
        admin.hashed_refresh_token
      );
      if(!tokenMatch) {
        throw new ForbiddenException('Forbidden');
      }
  
      const tokens = await this.getTokens(admin);
      const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
      const updateAdmin = await this.userRepo.update(
        { hashed_refresh_token: hashed_refresh_token},
        { where: {id: admin.id}, returning: true},
      );
  
  
      res.cookie('refresh_token', tokens.refresh_token, {
        maxAge: 15 * 24 * 60 * 100,
        httpOnly: true
      });
  
      const response = {
        message: ' Token refreshed',
        admin: updateAdmin[1][0],
        tokens
      };
      return response;
    }
  
    async findAll() {
      const admins = await this.userRepo.findAll({include: {all: true}});
      return admins;
    }
  
    async findOne(id: number) {
      const admin = await this.userRepo.findOne({where: {id}});
      if(!admin) {
        return {message: "Admin not found"}
      }
      return admin;
    }
  
  
    async update(id: number, updateUserDto: UpdateUserDto) {
      const updateAdmin = await this.userRepo.update(updateUserDto, {where: {id}, returning: true});
      return updateAdmin[1][0];
    }
  
    async remove(id: number) {
      const admin = await this.userRepo.destroy({where: {id}});
      if(!admin)
      {
        throw new HttpException('Admin not found!', HttpStatus.NOT_FOUND)
      }
      return {message: 'Admin delated'};
    }
}
