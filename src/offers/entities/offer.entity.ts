import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsString } from 'class-validator';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @IsString()
  user: string; //id желающего скинуться

  @Column()
  item: string; //описание коллекции подарков

  @Column()
  amount: string;

  @Column()
  hidden: boolean; //флаг инфа о скидывающемся
}
