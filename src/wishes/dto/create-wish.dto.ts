import {
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';
import { User } from '../../users/entities/user.entity';
import { Offer } from '../../offers/entities/offer.entity';

export class CreateWishDto {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @IsString()
  @Length(1, 250)
  name: string;

  @Column()
  @IsUrl()
  @IsOptional()
  link: string;

  @Column()
  @IsUrl()
  @IsOptional()
  image: string;

  //стоимость подарка, с округлением??? до сотых, число
  @Column()
  @IsNumber()
  @IsOptional()
  price: number;

  //сумма
  @Column()
  @IsNumber()
  @IsOptional()
  raised: string;

  @ManyToOne(() => User, (user) => user.wishes)
  owner: User;

  //строка с описанием подарка
  @Column()
  @IsString()
  @Length(1, 1024)
  description: string;

  //массив ссылок на заявки скинуться от других пользователей
  @OneToMany(() => Offer, (offer) => offer.item)
  offers: Offer;

  //счетчик тех, кто скопировал подарок себе. Целое
  @Column()
  @IsInt()
  copied: string;
}
