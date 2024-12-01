import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { Offer } from '../../offers/entities/offer.entity';
import { Wish } from '../../wishes/entities/wish.entity';

@Entity() // обозначает , что дальше описание сущности
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @IsString()
  @Length(2, 30)
  username: string;

  @Column()
  about: string;

  @Column()
  avatar: string;

  @Column({
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty() //проверка на то, что поле не пустое
  email: string;

  @Column()
  @IsNotEmpty()
  @Length(8, 30)
  password: string;

  @IsNotEmpty()
  @OneToMany(() => Wish, (wish) => wish.owner)
  wishes: Wish[];

  @IsNotEmpty()
  @OneToMany(() => Offer, (offer) => offer.user)
  offer: Offer[];

  @Column()
  wishlists: string[];
}
