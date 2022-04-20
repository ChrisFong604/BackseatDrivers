import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { DriversModule } from './modules/drivers/drivers.module';
import { RequestsModule } from './modules/requests/requests.module';
import { RidesModule } from './modules/rides/rides.module';
import { SchoolsModule } from './modules/schools/schools.module';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './prisma/prisma.module';

import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    AuthModule,
    SchoolsModule,
    UsersModule,
    DriversModule,
    RidesModule,
    RequestsModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
