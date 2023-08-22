import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import {ConfigService} from '@nestjs/config';
import {Module} from "@nestjs/common";

@Module({
  imports: [
      ProductsModule,
      CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
