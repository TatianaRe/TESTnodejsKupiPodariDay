import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Wish {
  @PrimaryGeneratedColumn()
  id: number;

  @IsDate()
  @CreateDateColumn()
  createdAt: Date;

  @IsDate()
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

  @IsNotEmpty()
  @ManyToOne(() => User, (user) => user.wishes)
  owner: User;

  @Column()
  description: string;

  @Column()
  offers: string;

  @Column()
  copied: string;
}
