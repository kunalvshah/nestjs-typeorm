import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRunnerDto } from './dto/create-runner.dto';
import { UpdateRunnerDto } from './dto/update-runner.dto';
import { EntityManager, Repository } from 'typeorm';
import { Runner } from './entities/runner.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { throws } from 'assert';

@Injectable()
export class RunnerService {
  constructor(
    @InjectRepository(Runner)
    private readonly runnersRepository: Repository<Runner>,
    private readonly entityManager: EntityManager) { }

  async create(createRunnerDto: CreateRunnerDto) {
    const runner = new Runner(createRunnerDto);
    await this.entityManager.save(runner);
    // return 'This action adds a new runner';
    console.log('This action adds a new runner');
  }

  async findAll() {
    await this.entityManager.find(Runner)
    // return `This action returns all runner`;
    console.log('This action returns all runner');
    return this.runnersRepository.find()
  }

  async findOne(phonenumber: string) {
    console.log(`This action returns a #${phonenumber} runner`)
    return this.runnersRepository.findOneBy({ phonenumber });
    // return `This action returns a #${phonenumber} runner`;
  }

  async update(phonenumber: string, updateRunnerDto: UpdateRunnerDto) {
    const runner = await this.runnersRepository.findOneBy({ phonenumber });
    if (runner) {
      runner.enabled = updateRunnerDto.enabled;
      runner.name = updateRunnerDto.name;
      runner.password = updateRunnerDto.password;
      await this.entityManager.save(runner);
      return `This action updates a #${phonenumber} runner`;
    } else {
      return `Runner with phone number ${phonenumber} not found.`;
    }
  }
  async remove(phonenumber: string) {
    const runner = await this.runnersRepository.findOneBy({ phonenumber });

    if (!runner) {
      throw new NotFoundException(`Runner with phone number ${phonenumber} not found.`);
    }
    return await this.runnersRepository.remove(runner);
    // return `This action removes a #${phonenumber} runner`;
  }
}
