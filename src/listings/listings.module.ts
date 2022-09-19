import { Module } from '@nestjs/common';
import { ListingsService } from './listings.service';
import { ListingsResolver } from './listings.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [PrismaService, ListingsResolver, ListingsService],
})
export class ListingsModule {}
