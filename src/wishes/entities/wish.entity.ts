import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {IsString} from "class-validator";

@Entity()
export class Wish {

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
    link: string;

    @Column()
    image: string;

    @Column()
    price: string;

    @Column()
    raised: string;

    @Column()
    owner: string;

    @Column()
    description: string;

    @Column()
    offers: string;

    @Column()
    copied: string;
}