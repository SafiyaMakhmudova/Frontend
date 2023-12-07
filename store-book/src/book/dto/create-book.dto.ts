import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateBookDto {
    @ApiProperty({example: 'Anna Frank', description: 'Name of the book'})
    @IsNotEmpty()
    @IsString()
    title: string; 

    @ApiProperty({example: 'It is about life of little girl', description: 'Desc of the book'})
    @IsNotEmpty()
    @IsString()
    description: string; 

    @ApiProperty({example: 'Anna Frank', description: 'Name of the author of the book'})
    @IsNotEmpty()
    @IsString()
    author: string;

    @ApiProperty({example: '235', description: 'Number of pages of the book'})
    @IsNotEmpty()
    @IsNumber()
    pages: number; 

    @ApiProperty({example: '12-02-2019', description: 'Date of pushlibing'})
    @IsNotEmpty()
    @IsDateString()
    published_date: Date; 

    @ApiProperty({example: ';asfjoeirqofvj', description: 'url of photo of book'})
    @IsNotEmpty()
    @IsString()
    photo: string; 

    @ApiProperty({example: 'hard', description: 'type of book'})
    @IsNotEmpty()
    @IsString()
    type: string;

    @ApiProperty({example: '13-09-1945', description: 'Written date of book'})
    @IsNotEmpty()
    @IsDateString()
    written_date: Date; 

    @ApiProperty({example: '2', description: 'ID of category'})
    @IsNotEmpty()
    @IsNumber()
    category_id: number;

    @IsNumber()
    rating: number;

    @IsString()
    nashriyot: string;

    @IsString()
    audioBook:string;

    @IsNotEmpty()
    @IsNumber()
    price: number;
}
