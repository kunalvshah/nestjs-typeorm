import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configurations from './config/configurations';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { RunnerModule } from './runner/runner.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),
    DatabaseModule,
    RunnerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
