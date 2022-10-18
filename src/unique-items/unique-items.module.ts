import { Module } from '@nestjs/common';
import { UniqueItemService } from './unique-items.service';
import { UniqueItemResolver } from './unique-items.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [UniqueItemResolver, UniqueItemService, PrismaService],
})
export class UniqueItemModule {}
