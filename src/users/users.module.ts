import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { OffersModule } from '../offers/offers.module';
import { WishesModule } from '../wishes/wishes.module';
import { Wish } from '../wishes/entities/wish.entity';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Wish]),
    OffersModule,
    forwardRef(() => AuthModule),
    forwardRef(() => WishesModule),
    forwardRef(() => OffersModule),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
