import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ItemWhereUniqueInput } from '../@generated/item/item-where-unique.input';
import { Item } from '../@generated/item/item.model';
import { ItemService } from './item.service';

@Resolver(() => Item)
export class ItemResolver {
  constructor(private readonly itemService: ItemService) {}

  @Query(() => Item, { name: 'item' })
  findOne(@Args('where') where: ItemWhereUniqueInput) {
    return this.itemService.findOne(where);
  }
}
