import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  MinLength,
} from 'class-validator';
import { Offer } from '../../offers/entities/offer.entity';
import { Wish } from '../../wishes/entities/wish.entity';
import { Exclude } from 'class-transformer';

@Entity() // обозначает, что дальше описание сущности
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

  @Column({ default: 'Пока ничего не рассказал о себе' })
  @Length(2, 200)
  @IsOptional()
  about: string;

  @Column({ default: 'https://i.pravatar.cc/300' })
  @IsUrl()
  @IsOptional()
  avatar: string;

  @Column({
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty() //проверка на то, что поле не пустое
  email: string;

  @Exclude()
  @Column({ select: false })
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @OneToMany(() => Wish, (wish) => wish.owner)
  wishes: Wish[];

  @IsNotEmpty()
  @OneToMany(() => Offer, (offer) => offer.user)
  offer: Offer[];

  @Column()
  wishlists: string;
}
