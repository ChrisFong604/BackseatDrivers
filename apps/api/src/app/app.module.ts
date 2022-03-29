import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchoolsModule } from './modules/schools/schools.module';
import { PrismaModule } from './prisma/prisma.module';

import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [SchoolsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}