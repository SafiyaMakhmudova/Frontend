import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsStrongPassword, MinLength } from "class-validator";


export class LoginAdmindto {

    @ApiProperty({example:'Ad1#$n190', description:'Password of Admin'})
    @MinLength(6)
    @IsStrongPassword()
    password: string;

    @ApiProperty({example:'john213@gmail.com', description:'Email address of Admin'})
    @IsEmail()
    email: string;
}