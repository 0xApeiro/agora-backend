import { Test, TestingModule } from '@nestjs/testing';
import { ListingResolver } from './listings.resolver';
import { ListingService } from './listings.service';

describe('ListingResolver', () => {
  let resolver: ListingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListingResolver, ListingService],
    }).compile();

    resolver = module.get<ListingResolver>(ListingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
