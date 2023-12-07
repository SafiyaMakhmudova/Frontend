import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserAttr {
    first_name: string, 
    last_name: string, 
    email: string, 
    hashed_password: string, 
    refresh_token: string, 
    access_token: string, 
    phone_number: string,
    role: string
}

@Table({tableName: 'Users'})
export class User extends Model<User, UserAttr>{
    @ApiProperty({example: 1, description: 'Unique ID'})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ApiProperty({example: 'John', description: 'Firstname of Admin'})
    @Column({
        type: DataType.STRING,
    })
    first_name: string;

    @ApiProperty({example: 'Doe', description: 'LastName of Admin'})
    @Column({
        type: DataType.STRING,
    })
    last_name: string;
    
    
    @ApiProperty({example: 'john@gmail.com', description: 'Email address of Admin'})
    @Column({
        type: DataType.STRING,
    })
    email: string; 

    @ApiProperty({example: 'Uzbek1$t0n', description: 'Password of Admin'})
    @Column({
        type: DataType.STRING,
    })
    hashed_password: string;

    @ApiProperty({example: 'afjshcalsdtyieruwhf12', description: 'Refresh token if Admin'})
    @Column({
        type: DataType.STRING,
    })
    hashed_refresh_token: string;

    @ApiProperty({example: '+9989145678', description: 'Phone number of Admin'})
    @Column({
        type: DataType.STRING,
        unique: true
    })
    phone_number: string;

    @ApiProperty({example:'SUPERADMIN', description:'Role_category of Admin'})
    @Column({
        type: DataType.STRING,
        defaultValue: 'USER'
    })
    role: string;
}
