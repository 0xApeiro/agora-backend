import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DeleteOneListingInput } from '../@generated/listing/delete-one-listing.input';
import { FindUniqueListingInput } from '../@generated/listing/find-unique-listing.input';
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
  findOne(@Args('id') findOneListingInput: FindUniqueListingInput) {
    return this.listingsService.findOne(findOneListingInput);
  }

  @Mutation(() => Listing)
  updateListing(
    @Args('updateListingInput') updateListingInput: UpdateOneListingInput,
  ) {
    return this.listingsService.update(updateListingInput);
  }

  @Mutation(() => Listing)
  removeListing(@Args('id') removeInput: DeleteOneListingInput) {
    return this.listingsService.remove(removeInput);
  }
}
