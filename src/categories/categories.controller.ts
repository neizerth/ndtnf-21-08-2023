import {Controller, Get} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";

@Controller('categories')
export class CategoriesController {
    constructor(private configService: ConfigService) {}

    @Get()
    index() {
        const name = this.configService.get<string>('APP_NAME');

        return {
            name
        }
    }
}
