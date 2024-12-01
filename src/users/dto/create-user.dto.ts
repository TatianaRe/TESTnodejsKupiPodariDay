import {
  Column,
  CreateDateColumn,
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

export class CreateUserDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Length(2.3)
  @IsNotEmpty()
  username: string;

  @Length(2.2)
  @IsOptional()
  about: string;

  @IsUrl
  @IsOptional()
  avatar: string;

  @IsNotEmpty() //проверка на то, что поле не пустое
  @IsEmail()
  email: string;

  @MinLength(6)
  @IsNotEmpty()
  password: string;

  @Column()
  wishes: string;

  @Column()
  offers: string;

  @Column()
  wishlists: string[];
}
