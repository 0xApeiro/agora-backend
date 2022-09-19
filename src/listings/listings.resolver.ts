import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ListingCreateInput } from '../@generated/listing/listing-create.input';
import { Listing } from '../@generated/listing/listing.model';
import { UpdateOneListingInput } from '../@generated/listing/update-one-listing.input';
import { ListingsService } from './listings.service';

@Resolver(() => Listing)
export class ListingsResolver {
  constructor(private readonly listingsService: ListingsService) {}

  @Mutation(() => Listing)
  createListing(
    @Args('createListingInput') createListingInput: ListingCreateInput,
  ) {
    return this.listingsService.create(createListingInput);
  }

  @Query(() => [Listing], { name: 'listings' })
  findAll() {
    return this.listingsService.findAll();
  }

  @Query(() => Listing, { name: 'listing' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.listingsService.findOne(id);
  }

  @Mutation(() => Listing)
  updateListing(
    @Args('updateListingInput') updateListingInput: UpdateOneListingInput,
  ) {
    return this.listingsService.update(updateListingInput);
  }

  @Mutation(() => Listing)
  removeListing(@Args('id', { type: () => Int }) id: number) {
    return this.listingsService.remove(id);
  }
}
