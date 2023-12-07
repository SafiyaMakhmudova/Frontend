import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Category } from "../../category/models/category.model";

interface BookAttr {
    title: string; 
    description: string; 
    author: string;
    pages: number; 
    published_date: Date; 
    photo: string; 
    type: string;
    written_date: Date; 
    category_id: number;
    rating: number;
    nashriyot: string;
    audioBook:string;
    price: number;
}

@Table({tableName: 'books'})
export class Book extends Model<Book, BookAttr>{
    @ApiProperty({example: '1', description: 'Unique ID'})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ApiProperty({example: 'Anna Frank', description: 'Name of the book'})
    @Column({
        type: DataType.STRING
    })
    title: string; 

    @ApiProperty({example: 'It is about life of little girl', description: 'Desc of the book'})
    @Column({
        type: DataType.STRING
    })
    description: string;
    
    @ApiProperty({example: 'Anna Frank', description: 'Name of the author of the book'})
    @Column({
        type: DataType.STRING
    })
    author: string;

    @ApiProperty({example: '235', description: 'Number of pages of the book'})
    @Column({
        type: DataType.INTEGER
    })
    pages: number; 

    @ApiProperty({example: '12-02-2019', description: 'Date of pushlibing'})
    @Column({
        type: DataType.DATE
    })
    published_date: Date; 

    @ApiProperty({example: ';asfjoeirqofvj', description: 'url of photo of book'})
    @Column({
        type: DataType.STRING
    })
    photo: string; 

    @ApiProperty({example: 'hard', description: 'type of book'})
    @Column({
        type: DataType.STRING
    })
    type: string;

    @ApiProperty({example: '13-09-1945', description: 'Written date of book'})
    @Column({
        type: DataType.DATE
    })
    written_date: Date; 

    @Column({
        type: DataType.INTEGER,
        allowNull:true
    })

    rating: number;

    @Column({
        type: DataType.INTEGER,
        
    })

    price: number;


    @Column({
        type: DataType.STRING
    })
    nashriyot: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    audioBook: string;


    @ApiProperty({example: 1, description: 'Category_id of product'})
    @ForeignKey(() => Category)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    category_id: number;

    @BelongsTo(() => Category)
    category: Category;
}
