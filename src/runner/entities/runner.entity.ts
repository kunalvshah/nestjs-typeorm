import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Runner {
  @PrimaryGeneratedColumn()
  idRunner: number;

  @Column({ type: 'bigint', width: 11, unique: true })
  phonenumber: string;

  @Column({ default: true, type: 'tinyint', width: 1 })
  enabled: boolean;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  constructor(Runner: Partial<Runner>) {
    Object.assign(this, Runner);
  }
}
