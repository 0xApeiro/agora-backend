import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemResolver } from './item.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [PrismaService, ItemResolver, ItemService],
})
export class ItemModule {}
