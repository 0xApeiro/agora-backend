import { Module } from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { CollectionsResolver } from './collections.resolver';

@Module({
  providers: [CollectionsResolver, CollectionsService]
})
export class CollectionsModule {}
