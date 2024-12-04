import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { IsInt } from 'class-validator';
import { Wish } from '../../wishes/entities/wish.entity';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.offer)
  user: User; //id желающего скинуться

  @ManyToOne(() => Wish, (user) => user.offers)
  item: Wish; //содержит ссылку на товар

  @Column()
  @IsInt()
  amount: string;

  @Column()
  hidden: boolean; //флаг инфа о скидывающемся
}
