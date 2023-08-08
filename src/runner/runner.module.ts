import { Module } from '@nestjs/common';
import { RunnerService } from './runner.service';
import { RunnerController } from './runner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Runner } from './entities/runner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Runner])],
  controllers: [RunnerController],
  providers: [RunnerService],
})
export class RunnerModule {}
