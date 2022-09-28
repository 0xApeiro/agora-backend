import { Module } from '@nestjs/common';
import { UniqueItemService } from './unique-item.service';
import { UniqueItemResolver } from './unique-item.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [UniqueItemResolver, UniqueItemService, PrismaService],
})
export class UniqueItemModule {}
