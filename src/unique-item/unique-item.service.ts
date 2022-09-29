import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UniqueItemService {
  constructor(private prisma: PrismaService) {}

  findOne(where: Prisma.UniqueItemWhereUniqueInput) {
    return this.prisma.uniqueItem.findUnique({
      where,
      include: {
        listing: true,
      },
    });
  }

  upsert(
    where: Prisma.UniqueItemWhereUniqueInput,
    create: Prisma.UniqueItemCreateInput,
    update: Prisma.UniqueItemUpdateInput,
  ) {
    return this.prisma.uniqueItem.upsert({
      where,
      create,
      update,
    });
  }
}
