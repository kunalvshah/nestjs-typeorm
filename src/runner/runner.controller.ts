import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RunnerService } from './runner.service';
import { CreateRunnerDto } from './dto/create-runner.dto';
import { UpdateRunnerDto } from './dto/update-runner.dto';

@Controller('runner')
export class RunnerController {
  constructor(private readonly runnerService: RunnerService) { }

  @Post()
  async create(@Body() createRunnerDto: CreateRunnerDto) {
    return this.runnerService.create(createRunnerDto);
  }

  @Get()
  async findAll() {
    return this.runnerService.findAll();
  }

  @Get(':phonenumber')
  async findOne(@Param('phonenumber') phonenumber: string) {
    return this.runnerService.findOne(phonenumber);
  }

  @Patch(':phonenumber')
  update(@Param('phonenumber') phonenumber: string, @Body() updateRunnerDto: UpdateRunnerDto) {
    return this.runnerService.update(phonenumber, updateRunnerDto);
  }

  @Delete(':phonenumber')
  remove(@Param('phonenumber') phonenumber: string) {
    return this.runnerService.remove(phonenumber);
  }
}
