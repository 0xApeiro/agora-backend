import { Module } from '@nestjs/common';
import { ListingService } from './listing.service';
import { ListingResolver } from './listing.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [PrismaService, ListingResolver, ListingService],
})
export class ListingModule {}
