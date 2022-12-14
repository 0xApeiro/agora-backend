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
        listing: {
          include: {
            consideration: {
              include: {
                item: true,
              },
            },
            offer: true,
          },
        },
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

  update(
    where: Prisma.UniqueItemWhereUniqueInput,
    data: Prisma.UniqueItemUpdateInput,
  ) {
    return this.prisma.uniqueItem.update({
      where,
      data,
    });
  }
}
