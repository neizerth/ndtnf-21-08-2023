import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import {ConfigModule, ConfigService} from "@nestjs/config";

@Module({
  imports: [
  ],
  controllers: [ProductsController],
  providers: [ConfigService]
})
export class ProductsModule {}
