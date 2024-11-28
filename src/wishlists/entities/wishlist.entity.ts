import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {IsString} from "class-validator";

@Entity()
export class Wishlist {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    @IsString()
    name: string;

    @Column()
    description: string; //описание коллекции подарков

    @Column()
    image: string;

    @Column()
    items: string;
}
