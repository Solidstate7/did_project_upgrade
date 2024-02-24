import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModel } from 'src/__base-code__/entity/product.entity';
import { GiftModel } from 'src/__base-code__/entity/gift.entity';
import { DataModule } from 'src/common/data/data.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProductModel, GiftModel]), DataModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
