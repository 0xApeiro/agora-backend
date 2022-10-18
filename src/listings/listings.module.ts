import { Module } from '@nestjs/common';
import { ListingService } from './listings.service';
import { ListingResolver } from './listings.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [PrismaService, ListingResolver, ListingService],
})
export class ListingModule {}
