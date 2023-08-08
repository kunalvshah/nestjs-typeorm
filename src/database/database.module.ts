import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configurations from 'src/config/configurations';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        port: configService.get('db.mysql.port'),
        host: configService.get('db.mysql.host'),
        database: configService.get('db.mysql.database'),
        username: configService.get('db.mysql.username'),
        password: configService.get('db.mysql.password'),
        synchronize: configService.get('db.mysql.sync'),
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
