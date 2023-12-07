import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsOptional, IsPhoneNumber, IsString, IsStrongPassword, IsUppercase, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({example:'John', description:'Firstname of Admin'})
    @IsOptional()
    @IsString()
    first_name: string;

    @ApiProperty({example:'Doe', description:'Lastname of Admin'})
    @IsOptional()
    @IsString()
    last_name: string;

    @ApiProperty({example:'john213@gmail.com', description:'Email address of Admin'})
    @IsOptional()
    @IsEmail()
    email: string; 

    @ApiProperty({example:'Ad1#$n190', description:'Password of Admin'})
    @IsOptional()
    @MinLength(6)
    @IsStrongPassword()
    password: string; 

    @ApiProperty({example:'+99912345678', description:'Phone number of Admin'})
    @IsOptional()
    @IsPhoneNumber('UZ')
    phone_number: string;

    @ApiProperty({example:'SUPERADMIN', description:'Role_category of Admin'})
    @IsOptional()
    @IsString()
    @IsUppercase()
    role: string;
}
