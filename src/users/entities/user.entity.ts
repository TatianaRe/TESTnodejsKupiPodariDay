import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {IsString, IsEmail, IsNotEmpty} from "class-validator";

@Entity() // обозначает , что дальше описание сущности
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    @IsString()
    username: string;

    @Column()
    about : string;

    @Column()
    avatar: string;

    @Column({
        unique: true,
    })
    @IsNotEmpty() //проверка на то, что поле не пустое
    @IsEmail()
    email: string;

    @Column()
    password: string;

    @Column()
    wishes: string;

    @Column()
    offers: string;

    @Column()
    wishlists: string[];
}
