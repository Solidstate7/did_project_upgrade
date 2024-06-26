import { Module } from '@nestjs/common';
import { GiftService } from './gift.service';
import { GiftController } from './gift.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GiftModel } from 'src/__base-code__/entity/gift.entity';
import { DataModule } from 'src/common/data/data.module';
import { VcModule } from 'src/common/vc/vc.module';
import { NotificationModule } from 'src/notification/notification.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([GiftModel]),
    DataModule,
    VcModule,
    NotificationModule,
  ],
  controllers: [GiftController],
  providers: [GiftService],
})
export class GiftModule {}
