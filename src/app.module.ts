import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { AdminController, TestController } from './test.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, TestController, AdminController],
  providers: [AppService, CatsService],
})
export class AppModule {}
