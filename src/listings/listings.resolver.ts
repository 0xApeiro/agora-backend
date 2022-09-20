import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DeleteOneListingArgs } from '../@generated/listing/delete-one-listing.args';
import { DeleteOneListingInput } from '../@generated/listing/delete-one-listing.input';
import { FindUniqueListingArgs } from '../@generated/listing/find-unique-listing.args';
import { FindUniqueListingInput } from '../@generated/listing/find-unique-listing.input';
import { ListingCreateInput } from '../@generated/listing/listing-create.input';
import { Listing } from '../@generated/listing/listing.model';
import { UpdateOneListingArgs } from '../@generated/listing/update-one-listing.args';
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
  findOne(@Args() id: FindUniqueListingArgs) {
    return this.listingsService.findOne(id);
  }

  @Mutation(() => Listing)
  updateListing(@Args() id: UpdateOneListingArgs) {
    return this.listingsService.update(id);
  }

  @Mutation(() => Listing)
  removeListing(@Args() id: DeleteOneListingArgs) {
    return this.listingsService.remove(id);
  }
}
