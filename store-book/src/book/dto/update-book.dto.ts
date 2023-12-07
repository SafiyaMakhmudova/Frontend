import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @ApiProperty({example: 'Anna Frank', description: 'Name of the book'})
    @IsOptional()
    @IsString()
    title: string; 

    @ApiProperty({example: 'It is about life of little girl', description: 'Desc of the book'})
    @IsOptional()
    @IsString()
    description: string; 

    @ApiProperty({example: 'Anna Frank', description: 'Name of the author of the book'})
    @IsOptional()
    @IsString()
    author: string;

    @ApiProperty({example: '235', description: 'Number of pages of the book'})
    @IsOptional()
    @IsNumber()
    pages: number; 

    @ApiProperty({example: '12-02-2019', description: 'Date of pushlibing'})
    @IsOptional()
    @IsDate()
    published_date: Date; 

    @ApiProperty({example: ';asfjoeirqofvj', description: 'url of photo of book'})
    @IsOptional()
    @IsString()
    photo: string; 

    @ApiProperty({example: 'hard', description: 'type of book'})
    @IsOptional()
    @IsString()
    type: string;

    @ApiProperty({example: '13-09-1945', description: 'Written date of book'})
    @IsOptional()
    @IsDate()
    written_date: Date; 

    @ApiProperty({example: '2', description: 'ID of category'})
    @IsOptional()
    @IsNumber()
    category_id: number;
}
