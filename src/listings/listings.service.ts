import { Injectable } from '@nestjs/common';
import { ListingCreateInput } from '../@generated/listing/listing-create.input';
import { UpdateOneListingInput } from '../@generated/listing/update-one-listing.input';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ListingsService {
  constructor(private prisma: PrismaService) {}

  create(createListingInput: ListingCreateInput) {
    return this.prisma.listing.create({ data: createListingInput });
  }

  findAll() {
    return `This action returns all listings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} listing`;
  }

  update(updateListingInput: UpdateOneListingInput) {
    return this.prisma.listing.update(updateListingInput);
  }

  remove(id: number) {
    return `This action removes a #${id} listing`;
  }
}
