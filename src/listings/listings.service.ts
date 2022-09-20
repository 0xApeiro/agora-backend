import { Injectable } from '@nestjs/common';
import { DeleteOneListingArgs } from '../@generated/listing/delete-one-listing.args';
import { DeleteOneListingInput } from '../@generated/listing/delete-one-listing.input';
import { FindUniqueListingArgs } from '../@generated/listing/find-unique-listing.args';
import { FindUniqueListingInput } from '../@generated/listing/find-unique-listing.input';
import { ListingCreateInput } from '../@generated/listing/listing-create.input';
import { UpdateOneListingArgs } from '../@generated/listing/update-one-listing.args';
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

  findOne(id: FindUniqueListingArgs) {
    return this.prisma.listing.findUnique(id);
  }

  update(id: UpdateOneListingArgs) {
    return this.prisma.listing.update(id);
  }

  remove(id: DeleteOneListingArgs) {
    return this.prisma.listing.delete(id);
  }
}
