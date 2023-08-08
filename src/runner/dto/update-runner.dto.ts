import { PartialType } from '@nestjs/mapped-types';
import { CreateRunnerDto } from './create-runner.dto';

export class UpdateRunnerDto {
    name: string;
    password: string;
    enabled: boolean;
}
