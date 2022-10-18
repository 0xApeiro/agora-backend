import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UniqueItemCreateInput } from '../@generated/unique-item/unique-item-create.input';
import { UniqueItemUpdateInput } from '../@generated/unique-item/unique-item-update.input';
import { UniqueItemWhereUniqueInput } from '../@generated/unique-item/unique-item-where-unique.input';
import { UniqueItem } from '../@generated/unique-item/unique-item.model';
import { UniqueItemService } from './unique-items.service';

@Resolver(() => UniqueItem)
export class UniqueItemResolver {
  constructor(private readonly uniqueItemService: UniqueItemService) {}

  @Query(() => UniqueItem, { name: 'uniqueItem' })
  findOne(@Args('where') where: UniqueItemWhereUniqueInput) {
    return this.uniqueItemService.findOne(where);
  }

  @Mutation(() => UniqueItem)
  upsertUniqueItem(
    @Args('where') where: UniqueItemWhereUniqueInput,
    @Args('create') create: UniqueItemCreateInput,
    @Args('update') update: UniqueItemUpdateInput,
  ) {
    return this.uniqueItemService.upsert(where, create, update);
  }

  @Mutation(() => UniqueItem)
  updateUniqueItem(
    @Args('where') where: UniqueItemWhereUniqueInput,
    @Args('update') data: UniqueItemUpdateInput,
  ) {
    return this.uniqueItemService.update(where, data);
  }
}
