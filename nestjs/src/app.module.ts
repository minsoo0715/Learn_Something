import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { AdminController, TestController } from './test.controller';
import { User } from './users/users.entitiy';
import { UsersModule } from './users/users.module';
import { sqlpwd } from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: sqlpwd,
      database: 'test',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController, CatsController, TestController, AdminController],
  providers: [AppService, CatsService],
})
export class AppModule {}
