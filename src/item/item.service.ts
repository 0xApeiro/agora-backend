import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) {}

  findOne(where: Prisma.ItemWhereUniqueInput) {
    return this.prisma.item.findUnique({ where });
  }
}
