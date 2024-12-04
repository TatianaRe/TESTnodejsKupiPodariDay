import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsOptional, IsUrl, Length, MaxLength } from 'class-validator';
import { Wish } from '../../wishes/entities/wish.entity';

@Entity()
export class Wishlist {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @Length(1, 250)
  @IsOptional()
  name: string;

  @Column()
  @MaxLength(1500)
  @IsOptional()
  description: string; //описание коллекции подарков

  @IsUrl()
  @IsOptional()
  image: string;

  @JoinTable()
  items: Wish[];
}
