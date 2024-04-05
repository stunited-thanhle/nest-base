import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: String(configService.get('DB_HOST')),
        port: Number(configService.get<number>('DB_PORT')),
        database: String(configService.get('DB_NAME')),
        username: String(configService.get('DB_USER')),
        password: String(configService.get('DB_PASSWORD')),
        entities: [__dirname + './../../entities/*{.ts,.js}'],
        synchronize: false,
        autoLoadEntities: true,
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        migrationsTableName: 'migrations',
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DbModule {}
