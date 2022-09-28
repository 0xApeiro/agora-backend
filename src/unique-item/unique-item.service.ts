import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UniqueItemService {
  constructor(private prisma: PrismaService) {}

  upsert(
    where: Prisma.UniqueItemWhereUniqueInput,
    create: Prisma.UniqueItemCreateInput,
    update: Prisma.UniqueItemUpdateInput,
  ) {
    return this.prisma.uniqueItem.upsert({ where, create, update });
  }
}
