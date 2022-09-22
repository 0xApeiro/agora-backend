import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ListingCreateInput } from '../@generated/listing/listing-create.input';
import { ListingUpdateInput } from '../@generated/listing/listing-update.input';
import { ListingWhereUniqueInput } from '../@generated/listing/listing-where-unique.input';
import { Listing } from '../@generated/listing/listing.model';
import { ListingService } from './listing.service';

@Resolver(() => Listing)
export class ListingResolver {
  constructor(private readonly listingService: ListingService) {}

  @Mutation(() => Listing)
  createListing(@Args('data') data: ListingCreateInput) {
    return this.listingService.create(data);
  }

  @Query(() => [Listing], { name: 'listings' })
  findAll() {
    return this.listingService.findAll();
  }

  @Query(() => Listing, { name: 'listing' })
  findOne(@Args('where') where: ListingWhereUniqueInput) {
    return this.listingService.findOne(where);
  }

  @Mutation(() => Listing)
  updateListing(
    @Args('where') where: ListingWhereUniqueInput,
    @Args('data') data: ListingUpdateInput,
  ) {
    return this.listingService.update(where, data);
  }

  @Mutation(() => Listing)
  removeListing(@Args('where') where: ListingWhereUniqueInput) {
    return this.listingService.remove(where);
  }
}
