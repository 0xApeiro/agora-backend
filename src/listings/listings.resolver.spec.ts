import { Test, TestingModule } from '@nestjs/testing';
import { ListingsResolver } from './listings.resolver';
import { ListingsService } from './listings.service';

describe('ListingsResolver', () => {
  let resolver: ListingsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListingsResolver, ListingsService],
    }).compile();

    resolver = module.get<ListingsResolver>(ListingsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
