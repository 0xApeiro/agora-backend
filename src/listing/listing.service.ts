import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ListingService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.ListingCreateInput) {
    return this.prisma.listing.create({ data });
  }

  findAll() {
    return this.prisma.listing.findMany();
  }

  findOne(where: Prisma.ListingWhereUniqueInput) {
    return this.prisma.listing.findUnique({ where });
  }

  update(
    where: Prisma.ListingWhereUniqueInput,
    data: Prisma.ListingUpdateInput,
  ) {
    return this.prisma.listing.update({ where, data });
  }

  remove(where: Prisma.ListingWhereUniqueInput) {
    return this.prisma.listing.delete({ where });
  }
}
