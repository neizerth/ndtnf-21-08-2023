import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import {ConfigService} from "@nestjs/config";

@Module({
  controllers: [CategoriesController],
  providers: [ConfigService]
})
export class CategoriesModule {}
