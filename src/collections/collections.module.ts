import { Module } from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { CollectionsResolver } from './collections.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [PrismaService, CollectionsResolver, CollectionsService],
})
export class CollectionsModule {}
