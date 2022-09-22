import { Injectable } from '@nestjs/common';
import { CreateListingInput } from './dto/create-listing.input';
import { UpdateListingInput } from './dto/update-listing.input';

@Injectable()
export class ListingService {
  create(createListingInput: CreateListingInput) {
    return 'This action adds a new listing';
  }

  findAll() {
    return `This action returns all listing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} listing`;
  }

  update(id: number, updateListingInput: UpdateListingInput) {
    return `This action updates a #${id} listing`;
  }

  remove(id: number) {
    return `This action removes a #${id} listing`;
  }
}
