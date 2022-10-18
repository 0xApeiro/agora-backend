import { Injectable } from '@nestjs/common';
import { CreateCollectionInput } from './dto/create-collection.input';
import { UpdateCollectionInput } from './dto/update-collection.input';

@Injectable()
export class CollectionsService {
  create(createCollectionInput: CreateCollectionInput) {
    return 'This action adds a new collection';
  }

  findAll() {
    return `This action returns all collections`;
  }

  findOne(id: number) {
    return `This action returns a #${id} collection`;
  }

  update(id: number, updateCollectionInput: UpdateCollectionInput) {
    return `This action updates a #${id} collection`;
  }

  remove(id: number) {
    return `This action removes a #${id} collection`;
  }
}
