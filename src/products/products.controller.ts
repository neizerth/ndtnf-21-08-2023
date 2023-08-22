import {Controller, Get} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";

@Controller('products')
export class ProductsController {
    constructor(private configService: ConfigService) {}

    @Get()
    index() {
        const name = this.configService.get<string>('APP_NAME');

        return {
            name
        }
    }
}
