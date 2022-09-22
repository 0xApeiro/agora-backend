import { Module } from '@nestjs/common';
import { ListingService } from './listing.service';
import { ListingResolver } from './listing.resolver';

@Module({
  providers: [ListingResolver, ListingService]
})
export class ListingModule {}
