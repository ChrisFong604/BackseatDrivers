import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/* 
    This module is enables the PrismaService to be accessible ot all modules
*/
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
