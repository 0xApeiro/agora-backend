import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CollectionsService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.CollectionCreateInput) {
    return this.prisma.collection.create({ data });
  }

  findAll() {
    return this.prisma.collection.findMany();
  }

  findMany(where: Prisma.CollectionWhereInput) {
    return this.prisma.collection.findMany({ where });
  }

  findOne(where: Prisma.CollectionWhereUniqueInput) {
    return this.prisma.collection.findUnique({ where });
  }

  update(
    where: Prisma.CollectionWhereUniqueInput,
    data: Prisma.CollectionUpdateInput,
  ) {
    return this.prisma.collection.update({ where, data });
  }

  remove(where: Prisma.CollectionWhereUniqueInput) {
    return this.prisma.collection.delete({ where });
  }
}
