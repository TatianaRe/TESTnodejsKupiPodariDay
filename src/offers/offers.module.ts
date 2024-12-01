import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';

@Module({
  controllers: [OffersController],
  providers: [OffersService],
  exports: [OffersService, OffersModule],
})
export class OffersModule {}
