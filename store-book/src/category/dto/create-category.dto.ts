import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class CreateCategoryDto {
    @ApiProperty({example: 'Temuriylar davri', description: 'Name of category'})
    @IsNotEmpty()
    @IsString()
    name: string;
}
