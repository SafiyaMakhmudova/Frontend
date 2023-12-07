import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsStrongPassword, IsUppercase, MinLength } from "class-validator";


export class CreateUserDto {
    @ApiProperty({example:'John', description:'Firstname of Admin'})
    @IsNotEmpty()
    @IsString()
    first_name: string;

    @ApiProperty({example:'Doe', description:'Lastname of Admin'})
    @IsNotEmpty()
    @IsString()
    last_name: string;

    @ApiProperty({example:'john213@gmail.com', description:'Email address of Admin'})
    @IsEmail()
    email: string; 

    @ApiProperty({example:'Ad1#$n190', description:'Password of Admin'})
    @MinLength(6)
    @IsStrongPassword()
    password: string; 

    @ApiProperty({example:'+99912345678', description:'Phone number of Admin'})
    @IsPhoneNumber('UZ')
    phone_number: string;

    @ApiProperty({example:'SUPERADMIN', description:'Role_category of Admin'})
    @IsOptional()
    @IsString()
    @IsUppercase()
    role: string;
}
