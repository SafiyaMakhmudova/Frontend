import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Book } from "../../book/models/book.model";


interface CategoryAttr {
    name: string;
}

@Table({tableName: 'category'})
export class Category extends Model<Category, CategoryAttr>{
    @ApiProperty({example: '1', description: 'Unique ID'})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ApiProperty({example: 'Temuriylar davri', description: 'Name of category'})
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    name: string;

    @HasMany(() => Book)
    products: Book[]
}
