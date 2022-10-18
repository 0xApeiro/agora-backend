import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CollectionsService } from './collections.service';
import { Collection } from './entities/collection.entity';
import { CreateCollectionInput } from './dto/create-collection.input';
import { UpdateCollectionInput } from './dto/update-collection.input';

@Resolver(() => Collection)
export class CollectionsResolver {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Mutation(() => Collection)
  createCollection(@Args('createCollectionInput') createCollectionInput: CreateCollectionInput) {
    return this.collectionsService.create(createCollectionInput);
  }

  @Query(() => [Collection], { name: 'collections' })
  findAll() {
    return this.collectionsService.findAll();
  }

  @Query(() => Collection, { name: 'collection' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.collectionsService.findOne(id);
  }

  @Mutation(() => Collection)
  updateCollection(@Args('updateCollectionInput') updateCollectionInput: UpdateCollectionInput) {
    return this.collectionsService.update(updateCollectionInput.id, updateCollectionInput);
  }

  @Mutation(() => Collection)
  removeCollection(@Args('id', { type: () => Int }) id: number) {
    return this.collectionsService.remove(id);
  }
}
