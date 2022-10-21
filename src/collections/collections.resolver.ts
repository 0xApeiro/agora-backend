import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CollectionCreateInput } from '../@generated/collection/collection-create.input';
import { CollectionUpdateInput } from '../@generated/collection/collection-update.input';
import { CollectionWhereUniqueInput } from '../@generated/collection/collection-where-unique.input';
import { CollectionWhereInput } from '../@generated/collection/collection-where.input';
import { CollectionsService } from './collections.service';
import { Collection } from '../@generated/collection/collection.model';

@Resolver(() => Collection)
export class CollectionsResolver {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Mutation(() => Collection)
  createCollection(@Args('data') data: CollectionCreateInput) {
    return this.collectionsService.create(data);
  }

  @Query(() => [Collection], { name: 'collections' })
  findAll() {
    return this.collectionsService.findAll();
  }

  @Query(() => [Collection], { name: 'collections' })
  findMany(@Args('where') where: CollectionWhereInput) {
    return this.collectionsService.findMany(where);
  }

  @Query(() => Collection, { name: 'collection' })
  findOne(@Args('where') where: CollectionWhereUniqueInput) {
    return this.collectionsService.findOne(where);
  }

  @Mutation(() => Collection)
  updateCollection(
    @Args('where') where: CollectionWhereUniqueInput,
    @Args('data') data: CollectionUpdateInput,
  ) {
    return this.collectionsService.update(where, data);
  }

  @Mutation(() => Collection)
  removeCollection(@Args('where') where: CollectionWhereUniqueInput) {
    return this.collectionsService.remove(where);
  }
}
