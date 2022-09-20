import { Injectable } from '@nestjs/common';
import { DeleteOneListingInput } from '../@generated/listing/delete-one-listing.input';
import { FindUniqueListingInput } from '../@generated/listing/find-unique-listing.input';
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
    return this.prisma.listing.findMany();
  }

  findOne(id: FindUniqueListingInput) {
    return this.prisma.listing.findUnique(id);
  }

  update(updateListingInput: UpdateOneListingInput) {
    return this.prisma.listing.update(updateListingInput);
  }

  remove(id: DeleteOneListingInput) {
    return this.prisma.listing.delete(id);
  }
}
